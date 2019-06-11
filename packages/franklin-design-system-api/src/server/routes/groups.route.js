const handler = require('../handlers/groups.handler');
const joi = require('joi');
const groupsRoutes = [
  {
    method: 'GET',
    path: '/groups/',
    options: {
      handler: handler.get,
      description: 'Gets all groups',
      tags: ['api'],
      plugins: {},
      validate: {
        query: {
          type: joi
            .string()
            .allow('')
            .allow(null),
          name: joi
            .string()
            .allow('')
            .allow(null),
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/groups/{id}',
    options: {
      handler: handler.get,
      description: 'Gets a specific group by group id',
      tags: ['api'],
      plugins: {},
    },
  },
];
module.exports = groupsRoutes;
