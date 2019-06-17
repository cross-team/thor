const _ = require('lodash');
const GroupsLib = require('../lib/groups.lib');
const validation = require('../utils/db/validations/groups.validations');

class GroupsHandler {
  /**
   * gets all docs for the specific query
   * @param {object} request
   * @param {object} h
   */
  async get(request, h) {
    try {
      const filters = transformQuery(request.query);
      if (!_.isUndefined(request.params.id)) {
        filters.push({ _id: request.params.id });
      }
      return h.response(await GroupsLib.get(filters));
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover();
    }
  }

  async upsert(request, h) {
    try {
      const qry = {};
      const payload = request.payload;
      let values = {};
      if (!_.isUndefined(request.params.id)) {
        qry._id = request.params.id;
      }
      // payload can not be empty
      if (Object.keys(payload).length === 0 && payload.constructor === Object) {
        throw new Error('Nothing passed in payload to update.');
      }
      values = validation.post.build(payload);
      validation.post.validate(values);
      return h.response(await GroupsLib.upsert(qry, values));
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover();
    }
  }

  async remove(request, h) {
    try {
      const qry = {};
      if (!_.isUndefined(request.params.id)) {
        qry._id = request.params.id;
      } else {
        throw new Error('No ID passed to delete');
      }
      return h.response(await GroupsLib.remove(qry));
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover();
    }
  }
}

// FUNCTIONS
function transformQuery(query) {
  const filters = [];

  // type
  if (query.type !== undefined) {
    filters.push({ type: query.type });
  }

  // name
  if (query.name !== undefined) {
    filters.push({ name: query.name });
  }

  // closeout
  return filters;
}

module.exports = new GroupsHandler();
