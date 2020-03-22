'use strict';

const withWeb = require('.');

const buildConfig = () => ({
    testEnvironment: 'jsdom',
    transform: {
        foo: 'bar',
    },
    moduleNameMapper: {
        foz: 'baz',
    },
});

it('should match snapshot', () => {
    expect(withWeb()(buildConfig())).toMatchSnapshot();
});

it('should throw if testEnvironment is not jsdom', () => {
    const config = {
        ...buildConfig(),
        testEnvironment: 'node',
    };

    expect(() => withWeb()(config)).toThrow(/expected testEnvironment to be set to "jsdom"/i);
});
