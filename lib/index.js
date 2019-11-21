'use strict';

const compose = require('./compose');
const baseConfig = require('./base-config');
const addons = require('./addons');

module.exports = { compose, baseConfig, ...addons };
