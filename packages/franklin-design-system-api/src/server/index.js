require('dotenv').config();

const Hapi = require('hapi');
//const { responseBuilder } = require('@telaclaims-tech/merge-utils')

// Plugins
const pack = require('../../package.json');

// Routes
const healthCheckRoute = require('./routes/health-check.route');
const healthCheckDbRoute = require('./routes/health-check-db.route');
const groupsRoute = require('./routes/groups.route');
const DbChecker = require('./lib/health-check-db.lib');

const host = process.env.NODE_HOST || '0.0.0.0';
const port = process.env.NODE_PORT || 3000;

module.exports = async () => {
  if (await DbChecker.check()) {
    console.log('database found');
  } else {
    console.error('database not found');
  }

  const server = await new Hapi.Server({
    host,
    port,
  });

  server.listener.keepAliveTimeout = 620e3;

  // Plugins

  // Routes
  server.route([...healthCheckRoute, ...healthCheckDbRoute, ...groupsRoute]);

  return server;
};