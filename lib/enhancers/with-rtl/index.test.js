'use strict';

const withRTL = require('.');

const buildConfig = () => ({
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['foo'],
});

it('should match snapshot', () => {
    expect(withRTL()(buildConfig())).toMatchSnapshot();
});

it('should throw if testEnvironment is not jsdom', () => {
    const config = {
        ...buildConfig(),
        testEnvironment: 'node',
    };

    expect(() => withRTL()(config)).toThrow(/expected testEnvironment to be set to/i);
});
