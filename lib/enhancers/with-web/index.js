'use strict';

module.exports = (config) => {
    config.testPathIgnorePatterns = [
        ...config.testPathIgnorePatterns,
        '/docusaurus/',
    ];

    config.transform = {
        '\\.data-url\\.': require.resolve('../../transforms/data-url'),
        '\\.inline\\.': require.resolve('../../transforms/inline'),
        ...config.transform,
    };

    config.collectCoverageFrom = [
        ...config.collectCoverageFrom,
        'www/**/*.js',
        'api/**/*.js',
    ];

    config.coveragePathIgnorePatterns = [
        ...config.coveragePathIgnorePatterns,
        '.*\\.data\\.js',
    ];

    return config;
};
