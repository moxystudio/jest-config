'use strict';

const jestPreset = require('./index');

it('should receive and return options', () => {
    expect(jestPreset({ should: 'work' })).toHaveProperty('should', 'work');
});

it('should have boilerplate option', () => {
    const config = jestPreset({ boilerplate: true });

    expect(config).toHaveProperty('collectCoverageFrom', ['www/**/*.js']);
    expect(config).toMatchSnapshot();
});

it('should have react option', () => {
    const config = jestPreset({ react: true });

    expect(config).toHaveProperty('setupFiles', ['./enzyme-react.setup.js']);
    expect(config).toMatchSnapshot();
});

it('should match snapshot', () => {
    expect(jestPreset()).toMatchSnapshot();
});
