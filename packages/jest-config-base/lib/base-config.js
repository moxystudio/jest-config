'use strict';

const { isCI } = require('ci-info');
const { defaults } = require('jest-config');

module.exports = (testEnvironment = 'jsdom') => ({
    ...defaults,
    testEnvironment,
    testPathIgnorePatterns: [
        ...defaults.testPathIgnorePatterns,
        '/docusaurus/',
    ],
    transform: {
        // Enable Babel so that `jest.mock` and friends are automatically hoisted, even if we don't use Babel for the source code
        '\\.[jt]s$': require.resolve('babel-jest'),
        '\\.(png|jpg|jpeg|gif|webp|svg|ico|bmp)$': require.resolve('./transforms/file'),
        '\\.(eot|ttf|woff|woff2|otf)$': require.resolve('./transforms/file'),
        '\\.(mp3|flac|wav|aac|ogg|oga|mp4|m4a|webm|ogv)$': require.resolve('./transforms/file'),
        '\\.(obj|mtl|fnt|glb)$': require.resolve('./transforms/file'),
        '\\.data-url\\.[^\\.+?]$': require.resolve('./transforms/data-url'),
        '\\.inline\\.[^\\.+?]$': require.resolve('./transforms/inline'),
    },
    collectCoverage: isCI,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    snapshotSerializers: [
        require.resolve('jest-serializer-path'),
    ],
    testMatch: [
        '**/?(*.)test.[jt]s',
    ],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
});
