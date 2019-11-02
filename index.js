'use strict';

const compose = require('./composer');
const baseConfig = require('./base-config');
const withWeb = require('./addons/withWeb');

module.exports = { compose, baseConfig, withWeb };
