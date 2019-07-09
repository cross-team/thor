const handler = require('../handlers/themes.handler')
const validations = require('../utils/db/validations/themes.validations')

const themeRoutes = [
  {
    method: 'GET',
    path: '/themes/',
    options: {
      handler: handler.get,
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
