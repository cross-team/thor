const handler = require('../handlers/tokens.handler')
const validations = require('../utils/db/validations/tokens.validations')

const tokensRoutes = [
  {
    method: 'GET',
    path: '/tokens/',
    options: {
      handler: handler.get,
      description: 'Gets all tokens',
      tags: ['api'],
      plugins: {},
      validate: {
        query: validations.get.query,
      },
    },
  },
  {
    method: 'GET',
    path: '/tokens/{id}',
    options: {
      handler: handler.get,
      description: 'Gets a specific document by release id',
      tags: ['api'],
      plugins: {},
    },
  },
  {
    method: 'PUT',
    path: '/tokens/{id}',
    options: {
      handler: handler.update,
      description: 'Updates a specific document by release id',
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
    path: '/tokens/',
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
    path: '/tokens/{id}',
    options: {
      handler: handler.remove,
      description: 'Deletea a specific document by release id',
      tags: ['api'],
      plugins: {},
    },
  },
]
module.exports = tokensRoutes
