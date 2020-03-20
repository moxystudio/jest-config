'use strict';

const { isCI } = require('ci-info');
const { defaults } = require('jest-config');

module.exports = () => ({
    ...defaults,
    transform: {
        '\\.js$': require.resolve('babel-jest'),
        '\\.(png|jpg|jpeg|gif|webp|ico)$': require.resolve('./transforms/file'),
        '\\.(eot|ttf|woff|woff2|otf)$': require.resolve('./transforms/file'),
        '\\.(mp3|flac|wav|aac|ogg|oga|mp4|m4a|webm|ogv)$': require.resolve('./transforms/file'),
        '\\.(obj|mtl|fnt|glb)$': require.resolve('./transforms/file'),
        '\\.(svg)$': require.resolve('./transforms/file'),
    },
    moduleNameMapper: {
        '\\.css$': require.resolve('identity-obj-proxy'),
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
