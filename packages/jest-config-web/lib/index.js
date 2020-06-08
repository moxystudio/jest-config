'use strict';

const assert = require('assert');

module.exports = () => (config) => {
    assert(config.testEnvironment === 'jsdom', new TypeError('Expected testEnvironment to be set to "jsdom".'));

    return {
        ...config,
        moduleNameMapper: {
            ...config.moduleNameMapper,
            '\\.css$': require.resolve('identity-obj-proxy'),
        },
    };
};
