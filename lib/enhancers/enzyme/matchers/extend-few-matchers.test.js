'use strict';

it('should extend a few matchers', () => {
    const extendEnzymeMatchers = require('.');

    extendEnzymeMatchers([
        'toBeDisabled',
        'toBeEmptyRender',
        'toExist',
        'toContainReact',
        'toHaveState',
    ]);

    expect(expect(null)).toMatchSnapshot();
});
