/* eslint-disable no-underscore-dangle */
const _ = require('lodash')
/**
 * used to prepare json for updates in mongodb... updates need dot notation for embedded docs
 */
const dot = {}
const toDot = (obj, name = '') => {
  Object.keys(obj).forEach(key => {
    if (_.isObject(obj[key]) && !_.isDate(obj[key])) {
      toDot(obj[key], name === '' ? key : `${name}.${key}`)
    } else {
      dot[name === '' ? key : `${name}.${key}`] = obj[key]
    }
  })
  return dot
}
const toDotArray = ary => {
  const values = ary
  Object.keys(ary).forEach(key => {
    if (_.isUndefined(values[key]._id)) {
      values[key] = toDot(values[key])
    }
  })
  return values
}
module.exports = {
  toDot,
  toDotArray,
}
