import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import chalk from "chalk";
import config from "../../gulpfile.config";
import path from "path";
import moment from "moment";
import schedule from "node-schedule";
let escape = require("regexp.escape");

import { Provider } from "react-redux";

let htmlTemplate = require("../templates/index.html");

export let router = express.Router({ mergeParams: true });

// rebuild data once at 5am every day
let rule = new schedule.RecurrenceRule();
rule.hour = 5;

let dataRebuildCacheSchedule = schedule.scheduleJob(rule, () => {
  console.log("Rebuilding data cache");
  clearNodeModuleCache({
    includePaths: [
      "data/",
      "client/js/src/store/sample/",
    ],
  });
  refreshState();
});

let initialState = undefined;
let store = undefined;
let routes = undefined;
let renderedContent = undefined;
let refreshState = () => {
  initialState = require("../../client/js/src/store/sample/").default;
  let { initStore } = require("../../client/js/src/store/");
  store = initStore(initialState);
  routes = require("../../client/js/src/routes/").default;
};

refreshState();

router.get(`${config.baseUrl}*`, (req, res, next) => {
  if (config.isDev) {
    // always use latest version of module each request
    clearNodeModuleCache();
    refreshState();
  }

  match({
    routes,
    location: req.url,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      try {
        if (!config.isDev) {
           // regenerate `data` each valid request
           refreshState();
        }
        res.status(200).send(htmlTemplate({
          isDev: config.isDev,
          title: `Michael Nigh - Resume - ${moment().format("YYYY-MM-DD")}`,
          content: renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          ),
          relPathToBaseUrl: relPathToBaseUrl(req.url),
        }));
      } catch (e) {
        console.log(chalk.red(e.stack || e));
        res.status(200).send(htmlTemplate({
          isDev: config.isDev,
          title: `Michael Nigh - Resume - ${moment().format("YYYY-MM-DD")}`,
          content: "",
          relPathToBaseUrl: relPathToBaseUrl(req.url),
        }));
      }
    } else {
      res.status(404).send("Not found");
    }
  });
});

let relPathToBaseUrl = function (path) {
  let result = path;
  result = result.replace(config.baseUrl, "/"); // remove baseUrl
  result = result.replace(/^.*?:\/\//, "", ""); // remove protocol
  result = "../".repeat(result.match(/\//g).length - 1); // each subdir = "../"
  return result;
};

/**
 * Clears modules from node cache, so calling require will rebuild module
 */
let clearNodeModuleCache = function (options: {
  /** relative include paths from project dir */
  includePaths?: string[],
  /** relative exclude paths from project dir */
  excludePaths?: string[]
} = {
  includePaths: [],
  excludePaths: [],
}) {
  options = Object.assign({
    includePaths: [],
    excludePaths: [],
  }, options);
  let { includePaths, excludePaths } = options;
  console.log(options);
  excludePaths.push("node_modules");
  let regExpIncludePaths = includePaths.map(p => new RegExp("^" + escape(path.resolve(`${process.cwd()}/${p}`))));
  let regExpExcludePaths = excludePaths.map(p => new RegExp("^" + escape(path.resolve(`${process.cwd()}/${p}`))));
  let modulesToDelete = [];
  for (let k in require.cache) {
    if (regExpIncludePaths.length > 0) {
      if (
        regExpIncludePaths.some(r => r.test(k)) &&
        !regExpExcludePaths.some(r => r.test(k))
      ) {
        modulesToDelete.push(k);
      }
    } else {
      if (
        !regExpExcludePaths.some(r => r.test(k))
      ) {
        modulesToDelete.push(k);
      }
    }
  }
  console.log(modulesToDelete);
  modulesToDelete.forEach(m => delete require.cache[m]);
  console.log(chalk.yellow(`Cleared module cache with RegExp - deleted ${modulesToDelete.length} modules`));
};

export default router;
