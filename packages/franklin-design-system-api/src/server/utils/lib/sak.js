/**
 * returns token based on key
 * @param {Array} ary
 * @param {Object} token
 */
const findTokenKeyInArray = (ary, token) => {
  if (ary.length > 0) {
    // eslint-disable-next-line no-restricted-syntax
    for (const index in ary) {
      if (ary[index].key === token) {
        return ary[index]
      }
    }
  }
  return false
}

/**
 * returns timestamp for all services
 */
const getCurrentTimeStamp = () => {
  const now = new Date()
  return now
}

module.exports = {
  findTokenKeyInArray,
  getCurrentTimeStamp,
}
