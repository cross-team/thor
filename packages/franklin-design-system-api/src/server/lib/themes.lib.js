/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
const _ = require('lodash')
const Db = require('../utils/db')
const model = require('../utils/db/models/themes.model')
const groups = require('../lib/groups.lib')
const sak = require('../utils/lib/sak')

// MAIN CLASS
class Themes {
  constructor() {
    this.appId = ''
    this.themeId = ''
    this._clearout()
  }

  async set(appId, themeId) {
    try {
      let groupFilters = [{ _id: appId }]
      let groupRows = await groups.get(groupFilters)
      if (
        _.isUndefined(groupRows[0]) ||
        _.isUndefined(groupRows[0].type) ||
        groupRows[0].type !== 'APP'
      ) {
        throw new Error('Submitted app id is not found')
      } else {
        this.appId = appId
      }
      groupRows = []
      groupFilters = [{ _id: themeId }]
      groupRows = await groups.get(groupFilters)
      if (
        _.isUndefined(groupRows[0]) ||
        _.isUndefined(groupRows[0].type) ||
        groupRows[0].type !== 'THEME'
      ) {
        throw new Error('Submitted theme id is not found')
      } else {
        this.themeId = themeId
      }
    } catch (err) {
      throw err
    }
  }

  async build() {
    const def = model.relationshipDef
    def[0].$match.$and[0]['groups.app.id'] = this.appId
    def[0].$match.$and[1]['groups.theme.id'] = this.themeId
    const rows = await Db.aggregate('tokens', def)
    if (rows.length > 0) {
      this._clearout()
      for (const topic of rows) {
        if (topic._id !== 'root-level') {
          this.theme[topic._id] = this._buildKeys(topic.keys)
        } else {
          this.theme = _.merge(this.theme, this._buildKeys(topic.keys))
        }
      }
    }
    return this.theme
  }

  _clearout() {
    this.theme = {}
    this._clearoutOthers()
  }

  _clearoutOthers() {
    this.array_tokens = {}
    this.obj_tokens = {}
  }

  _buildKeys(keys) {
    const standard = {}
    for (const token of keys) {
      if (token.key.indexOf('|') !== -1) {
        // array
        this._buildKeysArray(token)
      } else if (token.key.indexOf(':') !== -1) {
        // object
        this._buildKeysObject(token)
      } else {
        // standard
        standard[token.key] = sak.toNumberOrObj(token.value)
      }
    }
    const topic = { ...standard, ...this.array_tokens, ...this.obj_tokens }
    this._clearoutOthers()
    return topic
  }

  _buildKeysArray(token) {
    // break out the key
    const key = sak.splitInTwo(token.key, '|')
    // check if array exist... if not create it
    if (_.isUndefined(this.array_tokens[key.val1])) {
      this.array_tokens[key.val1] = []
    }
    // add value and index
    this.array_tokens[key.val1].splice(parseInt(key.val2, 10), 0, sak.toNumberOrObj(token.value))

    return true
  }

  _buildKeysObject(token) {
    // break out the key
    const key = sak.splitInTwo(token.key, ':')
    // check if array exist... if not create it
    if (_.isUndefined(this.obj_tokens[key.val1])) {
      this.obj_tokens[key.val1] = {}
    }
    // add value and index
    this.obj_tokens[key.val1][key.val2] = sak.toNumberOrObj(token.value)

    return true
  }
}

module.exports = new Themes()
