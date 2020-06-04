'use strict';

const assert = require('assert');

const withEnzyme = (adapter) => {
    assert(typeof adapter === 'string', new TypeError('Please provide an enzyme adapter.'));

    return (config) => {
        assert(config.testEnvironment === 'jsdom', new TypeError('Expected testEnvironment to be set to "jsdom".'));

        return ({
            ...config,
            globals: {
                ...config.globals,
                __MOXY_JEST_CONFIG_ENZYME_ADAPTER__: adapter,
            },
            setupFilesAfterEnv: [
                ...config.setupFilesAfterEnv,
                require.resolve('./setup'),
            ],
        });
    };
};

module.exports.withEnzymeWeb = (adapter) => {
    const applyEnzyme = withEnzyme(adapter);

    return (config) => {
        config = applyEnzyme(config);

        return {
            ...config,
            setupFilesAfterEnv: [
                ...config.setupFilesAfterEnv,
                require.resolve('./setup-web'),
            ],
        };
    };
};

module.exports.withEnzymeReactNative = (adapter, options) => {
    options = {
        ignoreExtraMessagePatterns: [],
        ...options,
    };

    const applyEnzyme = withEnzyme(adapter);

    return (config) => {
        config = applyEnzyme(config);

        return {
            ...config,
            globals: {
                ...config.globals,
                __MOXY_JEST_CONFIG_ENZYME_REACT_NATIVE_IGNORE_EXTRA_MESSAGE_PATTERNS__: options.ignoreExtraMessagePatterns,
            },
            setupFilesAfterEnv: [
                ...config.setupFilesAfterEnv,
                require.resolve('./setup-react-native'),
            ],
        };
    };
};
