'use strict';

const withEnzyme = require('.');

const buildConfig = () => ({
    testEnvironment: 'jsdom',
    globals: {
        foo: 'bar',
    },
    setupFilesAfterEnv: ['foo'],
});

it('should match snapshot when target is web', () => {
    expect(withEnzyme('enzyme-adapter-react-16', 'web')(buildConfig())).toMatchSnapshot();
});

it('should match snapshot when target is react-native', () => {
    expect(withEnzyme('enzyme-adapter-react-16', 'react-native')(buildConfig())).toMatchSnapshot();
});

it('should throw if no adapter is passed', () => {
    expect(() => withEnzyme()).toThrow(/please provide an enzyme adapter/i);
});

it('should throw if target is invalid', () => {
    expect(() => withEnzyme('enzyme-adapter-react-16')).toThrow(/please provide a valid target/i);
});

it('should throw if testEnvironment is not jsdom', () => {
    const config = {
        ...buildConfig(),
        testEnvironment: 'node',
    };

    expect(() => withEnzyme('enzyme-adapter-react-16', 'web')(config)).toThrow(/expected testEnvironment to be set to/i);
});
