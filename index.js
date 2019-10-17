'use strict';

module.exports = () => ({
    transform: {
        '\\.js$': require.resolve('babel-jest'),
        '\\.(png|jpg|jpeg|gif|webp|ico)$': require.resolve('jest-file'),
        '\\.(eot|ttf|woff|woff2|otf)$': require.resolve('jest-file'),
        '\\.(mp3|flac|wav|aac|ogg|oga|mp4|m4a|webm|ogv)$': require.resolve('jest-file'),
        '\\.(svg)$': require.resolve('jest-file'),
    },
    moduleNameMapper: {
        '\\.css$': require.resolve('identity-obj-proxy'),
    },
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    snapshotSerializers: [require.resolve('jest-serializer-path')],
    coveragePathIgnorePatterns: [],
    testPathIgnorePatterns: [],
    setupFilesAfterEnv: [],
    setupFiles: [],
});
