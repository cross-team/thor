const handler = require('../handlers/health-check-db.handler')

const healthCheckDbRoute = [
  {
    method: 'GET',
    path: '/db/check',
    options: {
      handler: handler.check,
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with '],
      },
      description: 'DB Health Check',
      tags: ['api', 'health-check'],
      plugins: {},
    },
  },
]
module.exports = healthCheckDbRoute
