const serverInit = require('./server')

;(async () => {
  try {
    const server = await serverInit()
    await server.start()
    console.info(`Server started in port: ${process.env.NODE_PORT}`) // eslint-disable-line
  } catch (err) {
    console.error(err) // eslint-disable-line
    process.exit(1)
  }
})()
