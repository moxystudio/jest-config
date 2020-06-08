'use strict';

module.exports = (options) => {
    options = {
        transformModules: (patterns) => patterns,
        ...options,
    };

    const reactNativePreset = require('react-native/jest-preset');

    const transformModules = options.transformModules([
        '(jest-)?react-native(-.*)?/',
        '@react-native-community/',
    ]);

    return (config) => ({
        ...config,
        haste: {
            ...config.haste,
            ...reactNativePreset.haste,
        },
        transformIgnorePatterns: [
            `node_modules/(?!${transformModules.join('|')})`,
        ],
        setupFiles: [
            ...config.setupFiles,
            ...reactNativePreset.setupFiles,
            require.resolve('./setup.js'),
        ],
    });
};
