'use strict';

var extendsPlugins = require("./extendsPlugins");
var parserOptions = require("./parserOptions");
var plugins = require("./plugins");
var globals = require("./globals");
var ignorePatterns = require("./ignorePatterns");
var rules = require("./rules");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: extendsPlugins,
  parserOptions,
  plugins,
  globals,
  ignorePatterns,
  rules,
};
