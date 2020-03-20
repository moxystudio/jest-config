'use strict';

const withEnzyme = require('.');

const buildConfig = () => ({
    globals: {
        foo: 'bar',
    },
    setupFilesAfterEnv: ['foo'],
});

it('should match snapshot', () => {
    expect(withEnzyme('enzyme-adapter-react-16')(buildConfig())).toMatchSnapshot();
});

it('should throw if no adapter is passed', () => {
    expect(() => withEnzyme()).toThrow(/please provide an enzyme adapter/i);
});
