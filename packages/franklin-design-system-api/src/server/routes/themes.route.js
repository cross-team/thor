const handler = require('../handlers/themes.handler')
const validations = require('../utils/db/validations/themes.validations')

const EpBase = 'themes'

const SwaggerTagsDesp = {
  name: EpBase,
  description: 'Returned different themes based on app and theme ids',
}

const Routes = [
  {
    method: 'GET',
    path: `/v1/${EpBase}/`,
    options: {
      handler: handler.get,
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with '],
      },
      description: 'Gets all theme',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        query: validations.get.query,
      },
    },
  },
]
module.exports = {
  Routes,
  SwaggerTagsDesp,
}
