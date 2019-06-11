const Db = require('../utils/db');

class Groups {
  async get(id, filters) {
    try {
      id = id !== undefined ? { _id: id } : {};
      await Db.connect();
      let rows = await Db.get('groups', id);
      return rows;
    } catch (err) {
      throw err;
    }
  }

  async upsert(id, data) {
    try {
      await Db.connect();
      let rows = await Db.get('groups');
      return rows;
    } catch (err) {
      throw err;
    }
  }

  async remove(id) {
    try {
      await Db.connect();
      let rows = await Db.get('groups');
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new Groups();
