const Db = require('../utils/db')
const model = require('../utils/db/models/tokens.model')

class Tokens {
  async aggregate(key) {
    try {
      await Db.connect()
      const def = model.relationshipDef
      def[1].$project._id.$cond.if.$in[0] = key
      def[1].$project.key.$cond.if.$in[0] = key
      def[1].$project.basedOnStructure.$cond.if.$and[0].$in[0] = key
      def[1].$project.basedOnStructure.$cond.if.$and[1].$eq[1] = key
      const rows = await Db.aggregate(model.name, def)
      return rows
    } catch (err) {
      throw err
    }
  }

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

module.exports = new Tokens()
