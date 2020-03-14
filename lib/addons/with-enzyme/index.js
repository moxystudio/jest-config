'use strict';

module.exports = (adapter) => {
    if (typeof adapter !== 'string') {
        throw new TypeError('Please provide an enzyme adapter');
    }

    return (config) => {
        config.globals = {
            ...config.globals,
            __MOXY_JEST_CONFIG_ENZYME_ADAPTER__: adapter,
        };

        config.setupFilesAfterEnv = [
            ...config.setupFilesAfterEnv,
            require.resolve('./setup-adapter'),
            require.resolve('./setup'),
        ];

        return config;
    };
};
