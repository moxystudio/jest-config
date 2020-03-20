'use strict';

const compose = require('./compose');
const baseConfig = require('./base-config');
const enhancers = require('./enhancers');

module.exports = { compose, baseConfig, ...enhancers };
