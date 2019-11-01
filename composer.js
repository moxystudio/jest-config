'use strict';

module.exports = (listOfAddons = []) => {
    if (!Array.isArray(listOfAddons)) {
        throw new Error('Received argument is not an array.');
    }

    return listOfAddons.reduce((acc, addon) => {
        if (typeof addon !== 'function') {
            throw new Error('Found item in argument list that is not a function, all objects to compose should be functions!');
        }

        return addon(acc);
    }, {});
};
