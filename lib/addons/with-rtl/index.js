'use strict';

module.exports = (config) => {
    config.setupFilesAfterEnv = [
        ...config.setupFilesAfterEnv,
        '@testing-library/jest-dom/extend-expect',
    ];

    return config;
};
