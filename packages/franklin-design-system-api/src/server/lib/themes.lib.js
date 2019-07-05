/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
const _ = require('lodash')
const Db = require('../utils/db')
const model = require('../utils/db/models/themes.model')
const groups = require('../lib/groups.lib')
// const sak = require('../utils/lib/sak')

// MAIN CLASS
class Themes {
  constructor() {
    this.appId = ''
    this.themeId = ''
    this._clearout()
  }

  async set(appId, themeId) {
    try {
      let groupFilters = [{ _id: appId }, { type: 'APP' }]
      let groupRows = await groups.get(groupFilters)
      if (groupRows.length === 0) {
        throw new Error('Submitted app id is not found')
      }
      this.appId = appId
      groupRows = []
      groupFilters = [{ _id: themeId }, { type: 'THEME' }]
      groupRows = await groups.get(groupFilters)
      if (groupRows.length === 0) {
        throw new Error('Submitted theme id is not found')
      }
      this.themeId = themeId
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
        this.theme[topic._id] = this._buildKeys(topic.keys)
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
        standard[token.key] = token.value
      }
    }
    const topic = { ...standard, ...this.array_tokens, ...this.obj_tokens }
    this._clearoutOthers()
    return topic
  }

  _buildKeysArray(token) {
    // break out the key
    const key = _.split(token.key, '|')
    const keyName = key[0]
    const keySubName = key[1]
    // check if array exist... if not create it
    if (_.isUndefined(this.array_tokens[keyName])) {
      this.array_tokens[keyName] = []
    }
    // add value and index
    this.array_tokens[key[0]].splice(parseInt(keySubName, 10), 0, token.value)

    return true
  }

  _buildKeysObject(token) {
    // break out the key
    const key = _.split(token.key, ':')
    const keyName = key[0]
    const keySubName = key[1]
    // check if array exist... if not create it
    if (_.isUndefined(this.obj_tokens[keyName])) {
      this.obj_tokens[keyName] = {}
    }
    // add value and index
    this.obj_tokens[keyName][keySubName] = token.value

    return true
  }
}

module.exports = new Themes()
