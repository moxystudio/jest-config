'use strict';

const compose = require('./composer');
const jestConfig = require('./jestConfig');
const withWeb = require('./addons/withWeb');

module.exports = { compose, jestConfig, withWeb };
