const GroupsLib = require('../lib/groups.lib');

class GroupsHandler {
  /**
   * gets all docs for the specific query
   * @param {object} request
   * @param {object} h
   */
  async get(request, h) {
    try {
      const id = request.params.id;
      const filters = id === undefined ? cleanQuery(request.query) : [];
      return h.response(await GroupsLib.get(id, filters));
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover();
    }
  }
}

function cleanQuery(query) {
  let filters = [];

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
