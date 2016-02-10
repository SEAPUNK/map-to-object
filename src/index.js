'use strict'

import 'babel-polyfill-safe'

module.exports = function mapToObject (map) {
  if (!(map instanceof Map)) {
    throw new Error('argument must be es2015 Maps')
  }
  const object = {}
  for (let [name, value] of map) {
    object[name] = value
  }
  return object
}
