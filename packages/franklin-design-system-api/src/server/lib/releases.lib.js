const Db = require('../utils/db')
const model = require('../utils/db/models/releases.model')
const sak = require('../utils/lib/sak')

// MAIN CLASS
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
      const release = { ...values }
      release.meta = sak.addMeta('update')
      const rows = await Db.update(model.name, qry, release)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async insert(values) {
    try {
      const release = { ...values }
      release.meta = sak.addMeta('create', values.meta)
      const rows = await Db.insert(model.name, release)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async remove(qry) {
    try {
      let flds = null
      if (!model.hardDelete) {
        flds = { meta: sak.addMeta('remove') }
      }
      const rows = await Db.remove(model.name, qry, flds)
      return rows
    } catch (err) {
      throw err
    }
  }
}

module.exports = Releases
