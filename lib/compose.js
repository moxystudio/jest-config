'use strict';

module.exports = (listOfEnhancers = []) => {
    if (!Array.isArray(listOfEnhancers)) {
        throw new Error('Received argument is not an array.');
    }

    return listOfEnhancers.reduce((acc, addon) => {
        if (typeof addon !== 'function') {
            throw new Error('Found item in argument list that is not a function, all objects to compose should be functions!');
        }

        return addon(acc);
    }, {});
};
