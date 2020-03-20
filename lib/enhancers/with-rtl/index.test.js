'use strict';

const withRTL = require('.');

const buildConfig = () => ({
    setupFilesAfterEnv: ['foo'],
});

it('should match snapshot', () => {
    expect(withRTL(buildConfig())).toMatchSnapshot();
});
