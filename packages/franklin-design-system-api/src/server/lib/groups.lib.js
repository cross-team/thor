const Db = require('../utils/db')
const model = require('../utils/db/models/groups.model')
const sak = require('../utils/lib/sak')

// MAIN CLASS
class Groups {
  // eslint-disable-next-line no-unused-vars
  static async get(values, opr = '$and') {
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

  static async update(qry, values) {
    try {
      const group = values
      group.meta = sak.addMeta('update')
      const rows = await Db.update(model.name, qry, group)
      return rows
    } catch (err) {
      throw err
    }
  }

  static async insert(values) {
    try {
      const group = values
      group.meta = sak.addMeta('create', values.meta)
      const rows = await Db.insert(model.name, group)
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

module.exports = Groups
