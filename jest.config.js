'use strict';

const jestConfig = require('./index');

module.exports = jestConfig({
    snapshotSerializers: [
        'jest-serializer-path',
    ],
});
