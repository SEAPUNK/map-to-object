'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

require('babel-polyfill-safe');

module.exports = function mapToObject(map) {
  if (!(map instanceof Map)) {
    throw new Error('argument must be es2015 Maps');
  }
  const object = {};
  for (let _ref of map) {
    var _ref2 = _slicedToArray(_ref, 2);

    let name = _ref2[0];
    let value = _ref2[1];

    object[name] = value;
  }
  return object;
};