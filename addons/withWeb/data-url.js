'use strict';

const fs = require('fs');
const mime = require('mime');

module.exports = {
    process(src, filename) {
        const mimeType = mime.getType(filename);

        return `module.exports = ${JSON.stringify(`data:${mimeType};base64,${fs.readFileSync(filename).toString('base64')}`)};`;
    },
};
