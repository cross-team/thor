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

/**
 *
 * @param {string} type
 * @param {object} value
 */
const addMeta = (type, value = {}) => {
  const meta = value
  const now = getCurrentTimeStamp()
  // eslint-disable-next-line default-case
  switch (type) {
    case 'update':
      meta.updated_on = now
      break
    case 'create':
      meta.updated_on = now
      meta.created_on = now
      break
    case 'remove':
      meta.delete_on = now
      break
  }
  return meta
}

module.exports = {
  findTokenKeyInArray,
  getCurrentTimeStamp,
  addMeta,
}
