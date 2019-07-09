/* eslint-disable import/order */
/**
 * MongoDB driver connector handler
 */

require('dotenv').config()

const MongoClient = require('mongodb').MongoClient

const MongoClientUrl = `mongodb://${process.env.DB_USER_DEV}:${process.env.DB_PASSWORD_DEV}@${
  process.env.DB_HOST_DEV
}:${process.env.DB_PORT_DEV}/${process.env.DB_DATABASE_DEV}`
const assert = require('assert')

class Connector {
  /**
   * connect to available mongoDB
   * @see auth info in env vars
   */
  static async connect() {
    return new Promise(resolve => {
      MongoClient.connect(
        MongoClientUrl,
        {
          useNewUrlParser: true,
        },
        (err, client) => {
          assert.equal(null, err)
          resolve(client)
        },
      )
    })
  }

  /**
   * close open connection
   */
  static async close(connection) {
    // eslint-disable-next-line no-return-await
    return await connection.close()
  }
}

module.exports = Connector
