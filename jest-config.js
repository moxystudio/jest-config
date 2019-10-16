'use strict';

module.exports = (options = {}) => {
    const {
        transform = {},
        moduleNameMapper = {},
        setupFilesAfterEnv = [],
        coverageThreshold = {},
        boilerplate = false,
        react = false,
    } = options;

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

    if (boilerplate) {
        const {
            setupFiles = [],
            collectCoverageFrom = [],
            testPathIgnorePatterns = [],
            coveragePathIgnorePatterns = [],
        } = options;

        config.collectCoverageFrom = [
            'www/**/*.js',
            ...collectCoverageFrom,
        ];
        config.testPathIgnorePatterns = [
            '/*.data.js/',
            ...testPathIgnorePatterns,
        ];
        config.coveragePathIgnorePatterns = [
            '/*.data.js/',
            ...coveragePathIgnorePatterns,
        ];
        config.setupFiles = [
            './enzyme-react.setup.js',
            ...setupFiles];
    }

    if (react) {
        const { setupFiles = [] } = options;

        config.setupFiles = [
            './enzyme-react.setup.js',
            ...setupFiles];
    }

    return config;
};

