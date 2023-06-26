const extends = require('../config/extends');
const parserOptions = require('../config/parserOptions');
const plugins = require('../config/plugins');
const globals = require('../config/globals');
const ignorePatterns = require('./config/ignorePatterns');
const reactRules = require('../config/reactRules');
const rules = require('../config/rules');
const settings = require('../config/settings');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    ...extends,
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
