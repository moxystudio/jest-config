'use strict';

const assert = require('assert');

module.exports.withRTL = () => (config) => {
    assert(config.testEnvironment === 'jsdom', new TypeError('Expected testEnvironment to be set to "jsdom".'));

    return ({
        ...config,
        setupFilesAfterEnv: [
            ...config.setupFilesAfterEnv,
            require.resolve('@testing-library/jest-dom/extend-expect'),
        ],
    });
};

module.exports.withNTL = () => (config) => {
    assert(config.testEnvironment === 'node', new TypeError('Expected testEnvironment to be set to "node".'));

    return ({
        ...config,
        setupFilesAfterEnv: [
            ...config.setupFilesAfterEnv,
            require.resolve('@testing-library/jest-native/extend-expect'),
        ],
    });
};
