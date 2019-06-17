const Db = require('../utils/db')
const model = require('../utils/db/models/groups.model')

class Groups {
  async get(values) {
    try {
      await Db.connect()
      const filters = values.length === 0 ? {} : { $and: values }
      const rows = await Db.get(model.name, filters)
      return rows
    } catch (err) {
      throw err
    }
  }

  async upsert(qry, values) {
    try {
      await Db.connect()
      const rows = await Db.upsert(model.name, qry, values)
      return rows
    } catch (err) {
      throw err
    }
  }

  async remove(qry) {
    try {
      await Db.connect()
      const rows = await Db.remove(model.name, qry, model.hardDelete ? null : model.hardDelete)
      return rows
    } catch (err) {
      throw err
    }
  }
}

module.exports = new Groups()