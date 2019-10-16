'use strict';

const jestPreset = require('./index');

it('should receive and return options', () => {
    expect(jestPreset({ should: 'work' })).toHaveProperty('should', 'work');
});

it('should have enzyme option', () => {
    const config = jestPreset({ enzyme: true });

    expect(config).toHaveProperty('setupFiles', ['./enzyme-react.setup.js']);
    expect(config).toMatchSnapshot();
});

it('should match snapshot', () => {
    expect(jestPreset()).toMatchSnapshot();
});
