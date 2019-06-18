/**
 * used to prepare json for updates in mongodb... updates need dot notation for embedded docs
 */
const dot = {}
const toDot = (obj, name = '') => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      toDot(obj[key], name === '' ? key : `${name}.${key}`)
    } else {
      dot[name === '' ? key : `${name}.${key}`] = obj[key]
    }
  })
  return dot
}
module.exports = {
  toDot,
}
