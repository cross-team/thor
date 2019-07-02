const Db = require('../utils/db')
const model = require('../utils/db/models/groups.model')

class Groups {
  // eslint-disable-next-line no-unused-vars
  async get(values, opr = '$and') {
    try {
      const filters = {}
      if (values.length > 0) {
        filters[opr] = values
      }
      const rows = await Db.get(model.name, filters)
      return rows
    } catch (err) {
      throw err
    }
  }

  async update(qry, values) {
    try {
      const rows = await Db.update(model.name, qry, values)
      return rows
    } catch (err) {
      throw err
    }
  }

  async insert(values) {
    try {
      const rows = await Db.insert(model.name, values)
      return rows
    } catch (err) {
      throw err
    }
  }

  async remove(qry) {
    try {
      const rows = await Db.remove(model.name, qry, model.hardDelete ? null : model.hardDelete)
      return rows
    } catch (err) {
      throw err
    }
  }
}

module.exports = new Groups()
