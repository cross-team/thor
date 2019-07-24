/* eslint-disable no-underscore-dangle */
const _ = require('lodash')
const releasesLib = require('../lib/releases.lib')
const validation = require('../utils/db/validations/releases.validations')

// PRIVATE LOCAL FUNCTIONS - TRANFORMATIONS

const _transformQuery = query => {
  const filters = []

  // type
  if (query.type !== undefined) {
    filters.push({ type: query.type })
  }

  // name
  if (query.name !== undefined) {
    filters.push({ name: query.name })
  }

  // closeout
  return filters
}

// MAIN CLASS
class ReleasesHandler {
  /**
   * gets all docs for the specific query
   * @param {object} request
   * @param {object} h
   */
  static async get(request, h) {
    try {
      const filters = _transformQuery(request.query)
      if (!_.isUndefined(request.params.id)) {
        filters.push({ _id: request.params.id })
      }
      return h.response(await releasesLib.get(filters))
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover()
    }
  }

  /**
   * handle updates for a single doc
   * @param {object} request
   * @param {object} h
   */
  static async update(request, h) {
    try {
      const qry = {}
      const payload = request.payload
      let values = {}
      // need an id to update
      if (_.isUndefined(request.params.id)) {
        throw new Error('No id made available for this update.')
      }
      qry._id = request.params.id
      // payload can not be empty
      if (Object.keys(payload).length === 0 && payload.constructor === Object) {
        throw new Error('Nothing passed in payload to update.')
      }
      values = validation.put.mapTo(payload)
      validation.put.validate(values)
      return h.response(await releasesLib.update(qry, values))
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover()
    }
  }

  /**
   * handle inserts for a single doc
   * @param {object} request
   * @param {object} h
   */
  static async insert(request, h) {
    try {
      const payload = request.payload
      let values = {}
      // payload can not be empty
      if (Object.keys(payload).length === 0 && payload.constructor === Object) {
        throw new Error('Nothing passed in payload to insert.')
      }
      values = validation.post.build(payload)
      validation.post.validate(values)
      return h.response(await releasesLib.insert(values))
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover()
    }
  }

  /**
   * handle removes for a single doc
   * @param {object} request
   * @param {object} h
   */
  static async remove(request, h) {
    try {
      const qry = {}
      if (!_.isUndefined(request.params.id)) {
        qry._id = request.params.id
      } else {
        throw new Error('No ID passed to delete')
      }
      return h.response(await releasesLib.remove(qry))
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover()
    }
  }
}

module.exports = ReleasesHandler
