'use strict';

module.exports = (options = {}) => {
    const {
        setupFiles = [],
        transform = {},
        moduleNameMapper = {},
        setupFilesAfterEnv = [],
        collectCoverageFrom = [],
        coverageThreshold = {},
        testPathIgnorePatterns = [],
        coveragePathIgnorePatterns = [],
    } = options;

    return {
        setupFiles: ['./jest.setup.js', ...setupFiles],
        // Transform files for Jest
        transform: {
            '\\.js$': require.resolve('babel-jest'),
            // Raster images (png, jpg, etc)
            '\\.(png|jpg|jpeg|gif|webp|ico)$': require.resolve('jest-file'),
            // Web fonts
            '\\.(eot|ttf|woff|woff2|otf)$': require.resolve('jest-file'),
            // Audio & Video
            '\\.(mp3|flac|wav|aac|ogg|oga|mp4|m4a|webm|ogv)$': require.resolve('jest-file'),
            // SVGs
            '\\.(svg)$': require.resolve('jest-file'),
            ...transform,
        },
        moduleNameMapper: {
            '\\.css$': require.resolve('identity-obj-proxy'),
            ...moduleNameMapper,
        },
        // Snapshots
        setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js',
            ...setupFilesAfterEnv,
        ],
        // Coverage
        collectCoverageFrom: [
            'www/**/*.js',
            ...collectCoverageFrom,
        ],
        coverageThreshold: {
            ...coverageThreshold,
            global: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: -10,
                ...coverageThreshold.global,
            },
        },
        testPathIgnorePatterns: [
            '/*.data.js/',
            ...testPathIgnorePatterns,
        ],
        coveragePathIgnorePatterns: [
            '/*.data.js/',
            ...coveragePathIgnorePatterns,
        ],
        ...options,
    };
};
