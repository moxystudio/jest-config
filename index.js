'use strict';

const compose = require('./composer');
const baseConfig = require('./base-config');
const addons = require('./addons');

module.exports = { compose, baseConfig, ...addons };
