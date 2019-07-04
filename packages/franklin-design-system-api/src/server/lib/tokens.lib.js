/* eslint-disable no-underscore-dangle */
const _ = require('lodash')
const Db = require('../utils/db')
const model = require('../utils/db/models/tokens.model')
const groups = require('../lib/groups.lib')
const releases = require('../lib/releases.lib')
const sak = require('../utils/lib/sak')

// PRIVATE LOCAL FUNCTIONS

/**
 * validate token value derived from another token
 * @param {object} value
 * @return {object}
 */
const _validBasedOnToken = async value => {
  const token = { ...value }
  if (token.value.startsWith('$')) {
    const basedOnKey = token.value.slice(1)
    // eslint-disable-next-line no-use-before-define
    const tokenRows = await Tokens.aggregate(basedOnKey)
    // get the returning token from the list of linked tokens
    const basedOnToken = sak.findTokenKeyInArray(tokenRows, basedOnKey)
    if (!basedOnToken) {
      throw new Error('Token value entered is not an existing valid token.')
    } else {
      token.based_on_key = basedOnKey
    }
    // obtain the root token and return it
    if (!_.isUndefined(basedOnToken.basedOnStructure) && basedOnToken.basedOnStructure.length > 0) {
      token.calculated_value = basedOnToken.basedOnStructure[0].value
    } else {
      token.calculated_value = ''
    }
  } else {
    token.based_on_key = ''
    token.calculated_value = ''
  }
  return token
}

/**
 * validate releases and load release info
 * @param {object} token
 * @return {object}
 */
const _validateLoadReleases = async token => {
  if (!_.isUndefined(token.release_id)) {
    const releaseFilters = [{ _id: token.release_id }]
    const releaseRows = await releases.get(releaseFilters)
    return model.validateReleases(token, releaseRows)
  }
  return token
}

/**
 * validates groups and loads group info
 * @param {object} values
 */
const _validateLoadGroups = async values => {
  // validate against groups
  const groupsFilters = []
  if (!_.isUndefined(values.groups.app)) {
    groupsFilters.push({ _id: values.groups.app.id })
  }
  if (!_.isUndefined(values.groups.theme)) {
    groupsFilters.push({ _id: values.groups.theme.id })
  }
  if (!_.isUndefined(values.groups.topic)) {
    groupsFilters.push({ _id: values.groups.topic.id })
  }
  const groupRows = await groups.get(groupsFilters, '$or')
  return model.validateGroups(values, groupRows)
}

/**
 * validates if key exists within tokens
 * @param {object} value
 */
const _doesTokenKeyExist = async value => {
  const tokenFilters = [{ key: value }]
  // eslint-disable-next-line no-use-before-define
  const tokenRows = await Tokens.get(tokenFilters)
  if (tokenRows.length === 0) {
    return false
  }
  return true
}

// MAIN CLASS

class Tokens {
  static async aggregate(key) {
    try {
      const def = model.relationshipDef
      def[1].$project._id.$cond.if.$in[0] = key
      def[1].$project.key.$cond.if.$in[0] = key
      def[1].$project.basedOnStructure.$cond.if.$and[0].$in[0] = key
      def[1].$project.basedOnStructure.$cond.if.$and[1].$eq[1] = key
      const rows = await Db.aggregate(model.name, def)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async get(values) {
    try {
      const filters = values.length === 0 ? {} : { $and: values }
      const rows = await Db.get(model.name, filters)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async update(qry, values) {
    try {
      // validate load groups
      let token = { ...values }
      token = await _validateLoadGroups(token)

      // validate release
      token = await _validateLoadReleases(token)

      // validate token value derived from another token
      token = await _validBasedOnToken(token)

      // add meta
      token.meta = sak.addMeta('update')

      const rows = await Db.update(model.name, qry, token)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async insert(values) {
    try {
      let token = { ...values }
      // validate and load groups
      token = await _validateLoadGroups(token)

      // validate release
      token = await _validateLoadReleases(token)

      // cannot have a duplicate key
      if (await _doesTokenKeyExist(token.key)) {
        throw new Error('Token key is duplicate')
      }

      // validate token value derived from another token
      token = await _validBasedOnToken(token)

      // add meta
      token.meta = sak.addMeta('create', token.meta)

      // insert the token
      const rows = await Db.insert(model.name, token)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async remove(qry) {
    try {
      let flds = null
      if (!model.hardDelete) {
        flds = { meta: sak.addMeta('remove') }
      }
      const rows = await Db.remove(model.name, qry, flds)
      return rows
    } catch (err) {
      throw err
    }
  }
}

module.exports = Tokens
