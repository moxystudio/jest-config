/* global __MOXY_JEST_CONFIG_ENZYME_REACT_NATIVE_IGNORE_EXTRA_MESSAGE_PATTERNS__:true */
/* eslint-env jest */

'use strict';

const extendEnzymeMatchers = require('./matchers');

const wrapConsoleMethod = (fn) => (message, ...rest) => {
    // Ignores logs coming from `react-dom` and similar, see: https://github.com/enzymejs/enzyme/issues/831#issuecomment-542851439
    // This is needed as we need JSDOM for Enzyme, while `react-native` doesn't really use it
    const ignoreMessagePatterns = [
        '<.* /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
        'The tag <.*> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
        'React does not recognize the `.*` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `.*` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
        'Received `.*` for a non-boolean attribute `.*`.',
        'Unknown event handler property `.*`. It will be ignored.',
        ...__MOXY_JEST_CONFIG_ENZYME_REACT_NATIVE_IGNORE_EXTRA_MESSAGE_PATTERNS__,
    ].join('|');
    const regexp = new RegExp(ignoreMessagePatterns, 'i');

    if (!regexp.test(message)) {
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

