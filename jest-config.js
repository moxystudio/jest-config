'use strict';

module.exports = (userOptions = {}) => {
    const {
        transform = {},
        moduleNameMapper = {},
        setupFilesAfterEnv = [],
        coverageThreshold = {},
        react = false,
        ...options
    } = userOptions;

    const config = {
        transform: {
            '\\.js$': require.resolve('babel-jest'),
            '\\.(png|jpg|jpeg|gif|webp|ico)$': require.resolve('jest-file'),
            '\\.(eot|ttf|woff|woff2|otf)$': require.resolve('jest-file'),
            '\\.(mp3|flac|wav|aac|ogg|oga|mp4|m4a|webm|ogv)$': require.resolve('jest-file'),
            '\\.(svg)$': require.resolve('jest-file'),
            ...transform,
        },
        moduleNameMapper: {
            '\\.css$': require.resolve('identity-obj-proxy'),
            ...moduleNameMapper,
        },
        setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js',
            ...setupFilesAfterEnv,
        ],
        collectCoverage: true,
        coverageThreshold: {
            global: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: -10,
                ...coverageThreshold.global,
            },
            ...coverageThreshold,
        },
        ...options,
    };

    if (react) {
        const { setupFiles = [] } = options;

        config.setupFiles = [
            './enzyme-react.setup.js',
            ...setupFiles];
    }

    return config;
};

