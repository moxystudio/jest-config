'use strict';

const withWeb = require('./web');
const withReactNative = require('./react-native');
const { withEnzymeWeb, withEnzymeReactNative } = require('./enzyme');
const { withRTL, withNTL } = require('./testing-library');

module.exports = {
    withWeb,
    withReactNative,
    withEnzymeWeb,
    withEnzymeReactNative,
    withRTL,
    withNTL,
};
