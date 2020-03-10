/* global expect:true */
// Setup based on jest-enzyme: https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme

'use strict';

const enzymeMatchers = require('enzyme-matchers');
const serializer = require('enzyme-to-json/serializer');

// Add the snapshot serializer for Enzyme wrappers
expect.addSnapshotSerializer(serializer);

// Add methods (matchers)
const matchers = {};

Object.keys(enzymeMatchers).forEach((matcherKey) => {
    const matcher = {
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
    }[matcherKey];

    matchers[matcherKey] = matcher;
});

expect.extend(matchers);
