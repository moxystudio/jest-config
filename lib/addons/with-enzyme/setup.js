/* global __MOXY_JEST_CONFIG_ENZYME_ADAPTER__:true */

'use strict';

const Enzyme = require('enzyme');
const Adapter = require(__MOXY_JEST_CONFIG_ENZYME_ADAPTER__);

Enzyme.configure({ adapter: new Adapter() });
