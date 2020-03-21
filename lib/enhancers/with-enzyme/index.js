'use strict';

const assert = require('assert');

const getTargetSetupFilesAfterEnv = (target) => {
    switch (target) {
    case 'web': return [require.resolve('./setup-web')];
    case 'react-native': return [require.resolve('./setup-react-native')];
    /* istanbul ignore next */
    default: return [];
    }
};

module.exports = (adapter, target) => {
    const validTargets = ['web', 'react-native'];

    assert(typeof adapter === 'string', new TypeError('Please provide an enzyme adapter.'));
    assert(validTargets.includes(target), new TypeError(`Please provide a valid target: ${validTargets.join(', ')}.`));

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
                ...getTargetSetupFilesAfterEnv(target),
            ],
        });
    };
};
