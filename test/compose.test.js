'use strict';

const compose = require('../composer');

it('should compose functions and output accumulated returns', () => {
    const one = () => 'one';
    const two = (prev) => `${prev} and two`;

    expect(compose([one, two])).toBe('one and two');
});

it('should throw when sent something other than a function in the array', () => {
    const notAFunction = {};

    expect(() => compose([notAFunction])).toThrow(/not a function/);
});

it('should throw when argument is not an array', () => {
    const notAnArray = {};

    expect(() => compose(notAnArray)).toThrow(/not an array/);
});

it('should return an empty object if not sent anything', () => {
    expect(compose()).toStrictEqual({});
});
