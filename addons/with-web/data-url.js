'use strict';

const fs = require('fs');
const mime = require('mime');

module.exports = {
    process(src, filename) {
        const mimeType = mime.getType(filename);

        if (mimeType == null) {
            throw new Error('Could not guess MIME type of file.');
        }

        return `module.exports = ${JSON.stringify(`data:${mimeType};base64,${fs.readFileSync(filename).toString('base64')}`)};`;
    },
};
