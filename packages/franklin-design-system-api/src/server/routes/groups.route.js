const handler = require('../handlers/groups.handler')
const validations = require('../utils/db/validations/groups.validations')

const EpBase = 'groups'

const SwaggerTagsDesp = {
  name: EpBase,
  description:
    'Allows for tokens to be grouped together in order to represent APPs, THEMES, TOPICS',
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
      description: 'Gets all groups',
      notes: 'Returns an array of group objects',
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
      description: 'Gets a specific document by group id',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        params: validations.get.params,
      },
    },
  },
  {
    method: 'PUT',
    path: `/v1/${EpBase}/{id}`,
    options: {
      handler: handler.update,
      description: 'Updates a specific document by group id',
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
      description: 'Delete a specific document by group id',
      tags: ['api', EpBase],
      plugins: {},
      validate: {
        params: validations.delete.params,
      },
    },
  },
]
module.exports = {
  Routes,
  SwaggerTagsDesp,
}
