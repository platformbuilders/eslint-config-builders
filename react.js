'use strict';

var extendsPlugins = require("./extendsPlugins");
var parserOptions = require("./parserOptions");
var plugins = require("./plugins");
var globals = require("./globals");
var ignorePatterns = require("./ignorePatterns");
var reactRules = require("./reactRules");
var rules = require("./rules");
var settings = require("./settings");

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    ...extendsPlugins,
  ],
  parserOptions,
  plugins: [
    'react',
    ...plugins,
  ],
  globals,
  ignorePatterns,
  rules: {
    ...reactRules,
    ...rules,
  },
  settings,
};
