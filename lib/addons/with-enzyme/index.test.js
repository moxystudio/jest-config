'use strict';

const withEnzyme = require('.');

it('should match snapshot', () => {
    expect(withEnzyme('enzyme-adapter-react-16')()).toMatchSnapshot();
});

it('should throw if no adapter is passed', () => {
    expect(() => withEnzyme()).toThrow(/please provide an enzyme adapter/i);
});
