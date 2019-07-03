const Db = require('../utils/db')
const model = require('../utils/db/models/releases.model')

class Releases {
  static async get(values) {
    try {
      const filters = values.length === 0 ? {} : { $and: values }
      const rows = await Db.get(model.name, filters)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async update(qry, values) {
    try {
      const rows = await Db.update(model.name, qry, values)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async insert(values) {
    try {
      const rows = await Db.insert(model.name, values)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async remove(qry) {
    try {
      const rows = await Db.remove(model.name, qry, model.hardDelete ? null : model.hardDelete)
      return rows
    } catch (err) {
      throw err
    }
  }
}

module.exports = new Releases()
