'use strict';

const config = require('./index');

module.exports = config({
    collectCoverageFrom: [
        'index.js',
        'jest-preset.js',
    ],
    snapshotSerializers: [
        'jest-serializer-path',
    ],
});
