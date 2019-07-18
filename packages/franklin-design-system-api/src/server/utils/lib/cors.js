module.exports = {
  plugin: require('hapi-cors'), // eslint-disable-line
  options: {
    // Allowing consumption by any host
    origins: ['*'],
    // Allowing authentication to be sent by default
    allowCredentials: 'true',
    // Caching
    maxAge: 600,
    // These methods are allowed
    methods: ['POST, GET, OPTIONS, DELETE, PUT'],
    // These request headers can be sent
    headers: ['Accept', 'Content-Type', 'Authorization', 'api-version'],
    // These headers can be consumed
    exposeHeaders: ['content-type', 'content-length', 'api-version'],
  },
}
