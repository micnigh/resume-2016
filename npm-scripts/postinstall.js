"use strict";
let fs = require("fs");
let execSync = require("child_process").execSync;

function execHelper(commands) {
  console.log(commands.join(" "));
  execSync(commands.join(" "), { stdio: "inherit" });
}

execHelper(["typings", "install"]);
execHelper(["bower", "install"]);
execHelper(["gulp", "--gulpfile", "gulpfile.transpile.js", "clean"]);
execHelper(["gulp", "--gulpfile", "gulpfile.transpile.js", "build"]);
execHelper(["gulp", "--gulpfile", "gulpfile.postinstall.js", "build"]);
try { fs.statSync("tsconfig.json"); } catch (e) { fs.writeFileSync("tsconfig.json", fs.readFileSync("tsconfig.sample.json")); }
