'use strict';

const jestPreset = require('./index');

it('should match snapshot', () => {
    expect(jestPreset()).toMatchSnapshot();
});
