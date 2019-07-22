const handler = require('../handlers/tokens.handler')
const validations = require('../utils/db/validations/tokens.validations')

const EpBase = 'tokens'

const SwaggerTagsDesp = {
  name: EpBase,
  description: 'Manage and maintain design tokens',
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
      description: 'Gets all tokens',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        query: validations.get.query,
      },
    },
  },
  {
    method: 'GET',
    path: `/v1/${EpBase}/{id}`,
    options: {
      handler: handler.get,
      description: 'Gets a specific document by release id',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        query: validations.get.params,
      },
    },
  },
  {
    method: 'PUT',
    path: `/v1/${EpBase}/{id}`,
    options: {
      handler: handler.update,
      description: 'Updates a specific document by release id',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        params: validations.put.params,
        payload: validations.put.payload,
      },
    },
  },
  {
    method: 'POST',
    path: `/v1/${EpBase}/`,
    options: {
      handler: handler.insert,
      description: 'Inserts a new document',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        payload: validations.post.payload,
      },
    },
  },
  {
    method: 'DELETE',
    path: `/v1/${EpBase}/{id}`,
    options: {
      handler: handler.remove,
      description: 'Delete a specific document by release id',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        query: validations.delete.params,
      },
    },
  },
]
module.exports = {
  Routes,
  SwaggerTagsDesp,
}
