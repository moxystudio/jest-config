'use strict';

const withReactNative = require('.');

// Copied and adapted from https://github.com/facebook/react-native/blob/master/jest-preset.js
jest.mock('react-native/jest-preset', () => ({
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
}), {
    virtual: true,
});

const buildConfig = () => ({
    testEnvironment: 'jsdom',
    haste: {
        foo: 'bar',
    },
    transform: {
        foz: 'baz',
    },
    setupFiles: ['foo'],
    transformIgnorePatterns: ['bar'],
});

it('should match snapshot', () => {
    expect(withReactNative()(buildConfig())).toMatchSnapshot();
});
