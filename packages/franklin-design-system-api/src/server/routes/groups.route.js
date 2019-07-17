const handler = require('../handlers/groups.handler')
const validations = require('../utils/db/validations/groups.validations')

const groupsRoutes = [
  {
    method: 'GET',
    path: '/groups/',
    options: {
      handler: handler.get,
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with '],
      },
      description: 'Gets all groups',
      tags: ['api'],
      plugins: {},
      validate: {
        query: validations.get.query,
      },
    },
  },
  {
    method: 'GET',
    path: '/groups/{id}',
    options: {
      handler: handler.get,
      description: 'Gets a specific document by group id',
      tags: ['api'],
      plugins: {},
    },
  },
  {
    method: 'PUT',
    path: '/groups/{id}',
    options: {
      handler: handler.update,
      description: 'Updates a specific document by group id',
      tags: ['api'],
      plugins: {},
      validate: {
        params: validations.put.params,
        payload: validations.put.payload,
      },
    },
  },
  {
    method: 'POST',
    path: '/groups/',
    options: {
      handler: handler.insert,
      description: 'Inserts a new document',
      tags: ['api'],
      plugins: {},
      validate: {
        payload: validations.post.payload,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/groups/{id}',
    options: {
      handler: handler.remove,
      description: 'Deletea a specific document by group id',
      tags: ['api'],
      plugins: {},
    },
  },
]
module.exports = groupsRoutes
