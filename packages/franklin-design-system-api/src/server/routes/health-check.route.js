const healthCheckRoute = [
  {
    method: 'GET',
    path: '/',
    options: {
      handler: (request, h) => h.response(),
      description: 'Health Check',
      tags: ['api'],
      plugins: {
        hapiAclAuth: {
          secure: false,
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/tokens/health-check',
    options: {
      handler: (request, h) => h.response(),
      description: 'Health Check',
      tags: ['api'],
      plugins: {
        hapiAclAuth: {
          secure: false,
        },
      },
    },
  },
];
module.exports = healthCheckRoute;
