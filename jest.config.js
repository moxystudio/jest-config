'use strict';

const { compose, baseConfig } = require('./packages/jest-config-base');

module.exports = compose(
    baseConfig('node'),
    (config) => ({
        ...config,
        // Inspired by: https://github.com/facebook/jest/issues/9543#issuecomment-616358056
        // A custom module resolver is needed so we can, e.g., mock require.resolve with virtual modules
        // See: https://jestjs.io/docs/configuration#resolver-string
        resolver: require.resolve('./jest/resolve-modules'),
    }),
);
