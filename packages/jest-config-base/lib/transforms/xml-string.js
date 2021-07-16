'use strict';

module.exports = {
    process(src) {
        return `module.exports = ${JSON.stringify(src)};`;
    },
};
