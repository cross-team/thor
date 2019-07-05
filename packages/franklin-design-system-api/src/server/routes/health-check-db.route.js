const handler = require('../handlers/health-check-db.handler')

const healthCheckDbRoute = [
  {
    method: 'GET',
    path: '/db/check',
    options: {
      handler: handler.check,
      description: 'DB Health Check',
      tags: ['api'],
      plugins: {},
    },
  },
]
module.exports = healthCheckDbRoute
