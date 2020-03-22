'use strict';

const { withEnzymeWeb, withEnzymeReactNative } = require('.');

const buildConfig = () => ({
    testEnvironment: 'jsdom',
    globals: {
        foo: 'bar',
    },
    setupFilesAfterEnv: ['foo'],
});

describe('withEnzymeWeb', () => {
    it('should match snapshot', () => {
        expect(withEnzymeWeb('enzyme-adapter-react-16')(buildConfig())).toMatchSnapshot();
    });

    it('should throw if no adapter is passed', () => {
        expect(() => withEnzymeWeb()).toThrow(/please provide an enzyme adapter/i);
    });

    it('should throw if testEnvironment is not jsdom', () => {
        const config = {
            ...buildConfig(),
            testEnvironment: 'node',
        };

        expect(() => withEnzymeWeb('enzyme-adapter-react-16', 'web')(config)).toThrow(/expected testEnvironment to be set to "jsdom"/i);
    });
});

describe('withEnzymeReactNative', () => {
    it('should match snapshot', () => {
        expect(withEnzymeReactNative('enzyme-adapter-react-16')(buildConfig())).toMatchSnapshot();
    });

    it('should throw if no adapter is passed', () => {
        expect(() => withEnzymeReactNative()).toThrow(/please provide an enzyme adapter/i);
    });

    it('should throw if testEnvironment is not jsdom', () => {
        const config = {
            ...buildConfig(),
            testEnvironment: 'node',
        };

        expect(() => withEnzymeReactNative('enzyme-adapter-react-16')(config)).toThrow(/expected testEnvironment to be set to "jsdom"/i);
    });
});
