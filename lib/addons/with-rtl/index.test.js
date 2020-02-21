'use strict';

const withRTL = require('.');

it('should match snapshot', () => {
    expect(withRTL()).toMatchSnapshot();
});
