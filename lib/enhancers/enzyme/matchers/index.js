/* eslint-env jest */
/* istanbul ignore file */

// Setup based on jest-enzyme: https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme

'use strict';

const enzymeMatchers = require('enzyme-matchers');

module.exports = (matcherKeys = Object.keys(enzymeMatchers)) => {
    const matchers = matcherKeys.reduce((matchers, matcherKey) => {
        if (!enzymeMatchers[matcherKey]) {
            return matchers;
        }

        return {
            ...matchers,
            [matcherKey](wrapper, ...args) {
                const result = enzymeMatchers[matcherKey].call(this, wrapper, ...args);

                let message = this.isNot ? result.negatedMessage : result.message;

                if (result.contextualInformation.expected) {
                    // eslint-disable-next-line new-cap
                    message += `\n${this.utils.RECEIVED_COLOR(result.contextualInformation.expected)}`;
                }

                if (result.contextualInformation.actual) {
                    // eslint-disable-next-line new-cap
                    message += `\n${this.utils.EXPECTED_COLOR(result.contextualInformation.actual)}`;
                }

                return {
                    ...result,
                    message: () => message,
                };
            },
        };
    }, {});

    expect.extend(matchers);
};
