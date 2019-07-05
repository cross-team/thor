/* eslint-disable no-underscore-dangle */
const _ = require('lodash')
/**
 * used to prepare json for updates in mongodb... updates need dot notation for embedded docs
 */
const dot = {}
const toDot = (obj, name = '') => {
  const o = { ...obj }
  Object.keys(o).forEach(key => {
    if (_.isObject(o[key]) && !_.isDate(o[key])) {
      toDot(o[key], name === '' ? key : `${name}.${key}`)
    } else {
      dot[name === '' ? key : `${name}.${key}`] = o[key]
    }
  })
  return dot
}
const toDotArray = ary => {
  const values = [...ary]
  Object.keys(values).forEach(key => {
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
