const Db = require('../utils/db')
const model = require('../utils/db/models/releases.model')

class Releases {
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

  async update(qry, values) {
    try {
      await Db.connect()
      const rows = await Db.update(model.name, qry, values)
      return rows
    } catch (err) {
      throw err
    }
  }

  async insert(values) {
    try {
      await Db.connect()
      const rows = await Db.insert(model.name, values)
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

module.exports = new Releases()
