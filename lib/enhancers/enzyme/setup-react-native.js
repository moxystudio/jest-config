/* eslint-env jest */

'use strict';

const getCallerFile = require('get-caller-file');
const extendEnzymeMatchers = require('./matchers');

const wrapConsoleMethod = (fn) => (message, ...rest) => {
    // Ignores logs coming from `react-dom` and similar, see: https://github.com/enzymejs/enzyme/issues/831#issuecomment-542851439
    // This is needed as we need JSDOM for Enzyme, while `react-native` doesn't really use it
    const blockPatternCallerFile = /(react-dom.development).js/i;
    const blockPatternMessage = /(module is not correctly linked)/i;

    if (!blockPatternMessage.test(message) && !blockPatternCallerFile.test(getCallerFile())) {
        return fn(message, ...rest);
    }
};

console.error = wrapConsoleMethod(console.error);
console.warn = wrapConsoleMethod(console.warn);

// Matchers: https://github.com/FormidableLabs/enzyme-matchers/blob/9bf368ad590509599a8c8a2ed7de6550fbb434f3/packages/jest-enzyme/README.md#assertions
extendEnzymeMatchers([
    'toBeDisabled',
    'toBeEmptyRender',
    'toExist',
    'toContainMatchingElement',
    'toContainMatchingElements',
    'toContainExactlyOneMatchingElement',
    'toContainReact',
    'toHaveDisplayName',
    'toHaveProp',
    'toHaveRef',
    'toHaveState',
    'toIncludeText',
    'toMatchElement',
    'toMatchSelector',
]);

