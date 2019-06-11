const HealthCheckDBLib = require('../lib/health-check-db.lib');

class HealthCheckDBHandler {
  async check() {
    try {
      return HealthCheckDBLib.check();
    } catch (err) {
      return h
        .response(err.message)
        .code(500)
        .takeover();
    }
  }
}

module.exports = new HealthCheckDBHandler();
