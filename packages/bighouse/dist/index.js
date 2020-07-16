'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var house = _interopDefault(require('house'));

function bighouse() {
  return house + ' bighouse' + 'hello';
}

module.exports = bighouse;
