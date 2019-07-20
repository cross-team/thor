const healthCheckRoute = [
  {
    method: 'GET',
    path: '/',
    options: {
      handler: (request, h) => h.response(),
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with '],
      },
      description: 'Health Check',
      tags: ['api', 'health-check'],
      plugins: {
        hapiAclAuth: {
          secure: false,
        },
      },
    },
  },
]
module.exports = healthCheckRoute
