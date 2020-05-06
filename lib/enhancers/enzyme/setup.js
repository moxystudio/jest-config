/* global __MOXY_JEST_CONFIG_ENZYME_ADAPTER__:true, expect:true */

'use strict';

const Enzyme = require('enzyme');
const serializer = require('enzyme-to-json/serializer');

const Adapter = require(__MOXY_JEST_CONFIG_ENZYME_ADAPTER__);

expect.addSnapshotSerializer(serializer);

Enzyme.configure({ adapter: new Adapter() });
