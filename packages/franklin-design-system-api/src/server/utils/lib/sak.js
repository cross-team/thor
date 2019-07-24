/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-globals */
/**
 * returns token based on key
 * @param {Array} ary
 * @param {Object} token
 */
const splitInTwo = (str, delimiter) => {
  const result = { val1: '', val2: '' }
  const index = str.indexOf(delimiter)
  if (index !== -1) {
    result.val1 = str.substring(0, index)
    result.val2 = str.substring(index + 1)
  }
  return result
}

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
 * converts a string to a number or object if the string is such
 * @param {string} value
 */
const toNumberOrObj = value => {
  // check if number
  if (!isNaN(value)) {
    return +value
  }

  // check if object
  if (value.charAt(0) === '{' && value.charAt(value.length - 1) === '}') {
    return JSON.parse(value)
  }

  // if not just return
  return value
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
  toNumberOrObj,
  splitInTwo,
}
