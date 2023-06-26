const extends = require('./config/extends');
const parserOptions = require('./config/parserOptions');
const plugins = require('./config/plugins');
const globals = require('./config/globals');
const ignorePatterns = require('./config/ignorePatterns');
const rules = require('./config/rules');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends,
  parserOptions,
  plugins,
  globals,
  ignorePatterns,
  rules,
};
