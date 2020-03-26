'use strict';

const extendEnzymeMatchers = require('.');

it('should extend all matchers', () => {
    extendEnzymeMatchers();

    expect(expect(null)).toMatchSnapshot();
});
