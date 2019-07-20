const handler = require('../handlers/themes.handler')
const validations = require('../utils/db/validations/themes.validations')

const themeRoutes = [
  {
    method: 'GET',
    path: '/v1/themes/',
    options: {
      handler: handler.get,
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with '],
      },
      description: 'Gets all theme',
      tags: ['api'],
      plugins: {},
      validate: {
        query: validations.get.query,
      },
    },
  },
]
module.exports = themeRoutes
