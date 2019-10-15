'use strict';

const jestPreset = require('./index');

it('should receive and return options', () => {
    expect(jestPreset({ should: 'work' })).toHaveProperty('should', 'work');
});

it('should match snapshot', () => {
    expect(jestPreset()).toMatchSnapshot();
});
