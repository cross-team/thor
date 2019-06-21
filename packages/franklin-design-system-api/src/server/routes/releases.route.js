// const joi = require('joi')
const handler = require('../handlers/releases.handler')
const validations = require('../utils/db/validations/releases.validations')
const releasesRoutes = [
  {
    method: 'GET',
    path: '/releases/',
    options: {
      handler: handler.get,
      description: 'Gets all releases',
      tags: ['api'],
      plugins: {},
      validate: {
        query: validations.get.query,
      },
    },
  },
  {
    method: 'GET',
    path: '/releases/{id}',
    options: {
      handler: handler.get,
      description: 'Gets a specific document by release id',
      tags: ['api'],
      plugins: {},
    },
  },
  {
    method: 'PUT',
    path: '/releases/{id}',
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
    path: '/releases/',
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
    path: '/releases/{id}',
    options: {
      handler: handler.remove,
      description: 'Deletea a specific document by release id',
      tags: ['api'],
      plugins: {},
    },
  },
]
module.exports = releasesRoutes
