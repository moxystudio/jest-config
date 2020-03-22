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
});
