/* eslint-disable no-underscore-dangle */

// const _ = require('lodash')
const themesLib = require('../lib/themes.lib')

// PRIVATE LOCAL FUNCTIONS

// MAIN CLASS
class ThemesHandler {
  /**
   * gets all docs for the specific query
   * @param {object} request
   * @param {object} h
   */
  static async get(request, h) {
    try {
      const req = { ...request }
      const appId = req.query.groups_app_id
      const themeId = req.query.groups_theme_id
      await themesLib.set(appId, themeId)
      return h.response(await themesLib.build())
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover()
    }
  }
}

module.exports = ThemesHandler
