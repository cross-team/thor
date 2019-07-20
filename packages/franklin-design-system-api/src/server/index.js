/* eslint-disable no-console */
require('dotenv').config()
// eslint-disable-next-line import/order
const Hapi = require('hapi')

// Routes
const healthCheckRoute = require('./routes/health-check.route')
const healthCheckDbRoute = require('./routes/health-check-db.route')
const groups = require('./routes/groups.route')
const releases = require('./routes/releases.route')
const tokens = require('./routes/tokens.route')
const themes = require('./routes/themes.route')
const DbChecker = require('./lib/health-check-db.lib')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const HapiApiVersion = require('hapi-api-version')

const host = process.env.NODE_HOST || '0.0.0.0'
const port = process.env.NODE_PORT || 3000

module.exports = async () => {
  if (await DbChecker.check()) {
    console.log('database found')
  } else {
    console.error('database not found')
  }

  const server = await new Hapi.Server({
    host,
    port,
  })

  server.listener.keepAliveTimeout = 620e3

  // Plugins
  const swaggerOptions = {
    info: {
      title: 'Design System API Endpoints',
      version: '1.0.0',
    },
    grouping: 'tags',
    tags: [
      groups.SwaggerTagsDesp,
      releases.SwaggerTagsDesp,
      themes.SwaggerTagsDesp,
      tokens.SwaggerTagsDesp,
      {
        name: 'health-check',
        description: 'Make sure things are working accordingly :-)',
      },
    ],
  }

  const apiVersionOptions = {
    validVersions: [1],
    defaultVersion: 1,
    vendorName: 'fti',
  }

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
    {
      plugin: HapiApiVersion,
      options: apiVersionOptions,
    },
  ])
  // Routes
  server.route([
    ...healthCheckRoute,
    ...healthCheckDbRoute,
    ...groups.Routes,
    ...releases.Routes,
    ...tokens.Routes,
    ...themes.Routes,
  ])

  return server
}
