'use strict';

const assert = require('assert');

const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

module.exports = (baseConfig, ...enhancers) => {
    assert(isObject(baseConfig), new TypeError('Expected first argument to be a base config object.'));

    return enhancers.reduce((config, enhancer) => {
        assert(typeof enhancer === 'function', new TypeError('Found item in the enhancers list that is not a function.'));

        config = enhancer(config);

        assert(isObject(config), new TypeError('Expected enhancer to return the config.'));

        return config;
    }, baseConfig);
};
