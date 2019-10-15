'use strict';

const jestPreset = require('./jest-preset');

it('should match snapshot', () => {
    expect(jestPreset).toMatchSnapshot();
});
