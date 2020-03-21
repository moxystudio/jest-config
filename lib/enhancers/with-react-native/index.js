'use strict';

module.exports = (config) => {
    const reactNativePreset = require('react-native/jest-preset');

    config.testEnvironment = reactNativePreset.testEnvironment;

    config.haste = {
        ...config.haste,
        ...reactNativePreset.haste,
    };

    config.setupFiles = [
        ...config.setupFiles,
        ...reactNativePreset.setupFiles,
    ];

    return config;
};
