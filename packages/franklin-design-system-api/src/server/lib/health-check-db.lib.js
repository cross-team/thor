require('dotenv').config()

const Connector = require('../utils/db/connector')

class DbChecker {
  static async check() {
    try {
      const client = await Connector.connect()
      await Connector.close(client)
      return true
    } catch (err) {
      throw err
    }
  }
}

module.exports = DbChecker
