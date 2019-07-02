const _ = require('lodash')
const tokensLib = require('../lib/tokens.lib')
const validation = require('../utils/db/validations/tokens.validations')

class TokensHandler {
  async graph(request, h) {
    try {
      return h.response(await tokensLib.aggregate('primary'))
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover()
    }
  }

  /**
   * gets all docs for the specific query
   * @param {object} request
   * @param {object} h
   */
  async get(request, h) {
    try {
      const filters = transformQuery(request.query)
      if (!_.isUndefined(request.params.id)) {
        filters.push({ _id: request.params.id })
      }
      return h.response(await tokensLib.get(filters))
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
  async update(request, h) {
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
      return h.response(await tokensLib.update(qry, values))
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
  async insert(request, h) {
    try {
      const payload = request.payload
      let values = {}
      // payload can not be empty
      if (Object.keys(payload).length === 0 && payload.constructor === Object) {
        throw new Error('Nothing passed in payload to insert.')
      }
      values = validation.post.build(payload)
      return h.response(await tokensLib.insert(values))
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
  async remove(request, h) {
    try {
      const qry = {}
      if (!_.isUndefined(request.params.id)) {
        qry._id = request.params.id
      } else {
        throw new Error('No ID passed to delete')
      }
      return h.response(await tokensLib.remove(qry))
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover()
    }
  }
}

// FUNCTIONS
function transformQuery(query) {
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

module.exports = new TokensHandler()
