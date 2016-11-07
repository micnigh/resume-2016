import { Gulp } from "gulp";
import { GulpTask, GulpWatchTask } from "../../../gulpfile.types";
import { GulpConfig } from "../../../gulpfile.config.types";
import size from "gulp-size";
import chalk from "chalk";
import path from "path";
import moment from "moment";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import { Provider } from "react-redux";

let htmlTemplate = require("../../../server/templates/index.html");

let initialState = require("../../../client/js/src/store/sample/").default;
let { initStore } = require("../../../client/js/src/store/");
let store = initStore(initialState);
let routes = require("../../../client/js/src/routes/").default;

export let generateTask = (gulp: Gulp, config: GulpConfig): GulpWatchTask => {
  let gulpTask = new GulpWatchTask();
  let src = "server/public";

  let buildTaskName = "build:html";
  let watchTaskName = "watch:html";

  gulpTask.childTasks = [buildTaskName];
  gulpTask.childWatchTasks = [watchTaskName];

  gulp.task(buildTaskName, [`${buildTaskName}:copy`, `${buildTaskName}:index`, `${buildTaskName}:txt`]);

  gulp.task(`${buildTaskName}:copy`, [], function () {
    return gulp.src([`${src}/**/*`])
      .pipe(size({ showFiles: true }))
      .pipe(gulp.dest(config.distPath));
  });

  gulp.task(`${buildTaskName}:index`, [], function (done) {
    match({
      routes,
      location: `/`,
    }, (error, redirectLocation, renderProps) => {
      let indexHTMLContent = htmlTemplate({
        isDev: config.isDev,
        inlineJS: `
          window.initialState = ${JSON.stringify(initialState)}
        `,
        title: `Michael Nigh - Resume - ${moment().format("YYYY-MM-DD")}`,
        appContent: renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ),
        relPathToBaseUrl: ``,
      });

      fs.writeFile(`${config.distPath}/index.html`, indexHTMLContent, (err) => {
        if (err) { console.error(err.stack || err); }
        done();
      });
    });
  });

  gulp.task(`${buildTaskName}:txt`, [], function (done) {
    match({
      routes,
      location: `/download/Michael-Nigh.txt`,
    }, (error, redirectLocation, renderProps) => {
      let indexHTMLContent = htmlTemplate({
        isDev: config.isDev,
        inlineJS: `
          window.initialState = ${JSON.stringify(initialState)}
        `,
        title: `Michael Nigh - Resume - ${moment().format("YYYY-MM-DD")}`,
        appContent: renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        ),
        relPathToBaseUrl: `../`,
      });

      fs.writeFile(`${config.distPath}/download/Michael-Nigh.txt/index.html`, indexHTMLContent, (err) => {
        if (err) { console.error(err.stack || err); }
        done();
      });
    });
  });

  gulp.task(watchTaskName, [buildTaskName], function () {
    return gulp.watch([`${src}/**/*`], [buildTaskName]);
  });

  return gulpTask;
};

export default generateTask;
