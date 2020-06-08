'use strict';

const compose = require('./compose');

it('should compose enhancers and output accumulated returns', () => {
    const one = jest.fn(() => ({ foo: 'bar' }));
    const two = jest.fn(() => ({ foz: 'baz' }));

    expect(compose({}, one, two)).toEqual({ foz: 'baz' });

    expect(one).toHaveBeenCalledTimes(1);
    expect(one).toHaveBeenLastCalledWith({});
    expect(two).toHaveBeenCalledTimes(1);
    expect(two).toHaveBeenLastCalledWith({ foo: 'bar' });
});

it('should not fail if there no enhancers', () => {
    expect(compose({})).toEqual({});
});

it('should throw when first argument is not an object', () => {
    const notAnObject = () => {};

    expect(() => compose(notAnObject)).toThrow(/base config object/i);
});

it('should throw when an enhancer is not a function', () => {
    const notAFunction = {};

    expect(() => compose({}, notAFunction)).toThrow(/not a function/i);
});

it('should throw when an enhancer does not return an object', () => {
    const enhancer = () => 1;

    expect(() => compose({}, enhancer)).toThrow(/to return the config/i);
});
