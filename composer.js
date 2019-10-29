'use strict';

module.exports = (listOfAddons = []) => {
    let aggregator = {};

    if (!Array.isArray(listOfAddons)) {
        throw new Error('Received argument is not an array.');
    }

    for (const addon of listOfAddons) {
        if (typeof addon !== 'function') {
            throw new Error('Found item in argument list that is not a function, all objects to compose should be functions!');
        }

        aggregator = addon(aggregator);
    }

    return aggregator;
};
