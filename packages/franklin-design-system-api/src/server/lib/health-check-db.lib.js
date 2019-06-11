require('dotenv').config();

const Connector = require('../utils/db/connector');

class DbChecker {
  async check() {
    try {
      let client = await Connector.connect();
      await Connector.close(client);
      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new DbChecker();
