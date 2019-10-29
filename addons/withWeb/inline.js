'use strict';

const fs = require('fs');

module.exports = {
    process(src, filename) {
        filename = Buffer.from(fs.readFileSync(filename));

        return `module.exports = \`${filename.toString()}\`;`;
    },
};
