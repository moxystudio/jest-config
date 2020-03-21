'use strict';

const assert = require('assert');

module.exports = () => (config) => {
    assert(config.testEnvironment === 'jsdom', new TypeError('Expected testEnvironment to be set to "jsdom".'));

    return ({
        ...config,
        setupFilesAfterEnv: [
            ...config.setupFilesAfterEnv,
            require.resolve('@testing-library/jest-dom/extend-expect'),
        ],
    });
};
