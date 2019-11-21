'use strict';

const configRTL = require('.');

it('should match snapshot', () => {
    expect(configRTL()).toMatchSnapshot();
});
