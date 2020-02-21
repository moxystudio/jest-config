'use strict';

module.exports = (adapter) => {
    if (typeof adapter !== 'string') {
        throw new TypeError('Please provide an enzyme adapter');
    }

    return (config = {}) => {
        const {
            setupFilesAfterEnv = [],
        } = config;

        config.globals = {
            __MOXY_JEST_CONFIG_ENZYME_ADAPTER__: adapter,
        };

        config.setupFilesAfterEnv = [
            ...setupFilesAfterEnv,
            require.resolve('./setup'),
            require.resolve('jest-enzyme'),
        ];

        return config;
    };
};
