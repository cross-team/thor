const HealthCheckDBLib = require('../lib/health-check-db.lib')

class HealthCheckDBHandler {
  static async check() {
    try {
      return HealthCheckDBLib.check()
    } catch (err) {
      return err
        .response(err.message)
        .code(500)
        .takeover()
    }
  }
}

module.exports = HealthCheckDBHandler
