/* eslint-env jest */

'use strict';

const getCallerFile = require('get-caller-file');

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

// Fixes warning for "Animated: useNativeDriver is not supported because the native animated module is missing..."
// See: https://github.com/ptomasroos/react-native-scrollable-tab-view/issues/642#issuecomment-593166721
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
