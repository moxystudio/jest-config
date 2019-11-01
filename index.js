'use strict';

const compose = require('./composer');
const baseConfig = require('./baseCoofig');
const withWeb = require('./addons/withWeb');

module.exports = { compose, baseConfig, withWeb };
