'use strict';

// Copied and adapted from: https://github.com/facebook/react-native/blob/master/jest-preset.js
const mockReactNativePreset = {
    haste: {
        defaultPlatform: 'ios',
        platforms: ['android', 'ios', 'native'],
    },
    transform: {
        '^.+\\.(js|ts|tsx)$': 'babel-jest',
        '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': './jest/assetFileTransformer.js',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native-community)',
    ],
    setupFiles: ['react-native/jest/setup.js'],
    testEnvironment: 'node',
};

// Copied and adapted from: https://github.com/testing-library/native-testing-library/blob/master/jest-preset.js
module.exports = {
    transformIgnorePatterns: [
        ...mockReactNativePreset.transformIgnorePatterns,
        'node_modules/(?!(react-native.*|@?react-navigation.*)/)',
    ],
    snapshotSerializers: ['./dist/preset/serializer.js'],
    setupFiles: [
        // Intentionally duplicated to assert duplicates are removed
        ...mockReactNativePreset.setupFiles,
        ...mockReactNativePreset.setupFiles,
        './dist/preset/setup.js',
    ],
};
