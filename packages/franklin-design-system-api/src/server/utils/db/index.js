require('dotenv').config();

const Connector = require('./connector');
const ObjectId = require('mongodb').ObjectId;

class Db {
  constructor() {
    this._cleanup();
  }

  /**
   * connects mongodb, establishes a connection and loads required parms to Db object
   * @param {connector} connector
   */
  async connect(connector) {
    this.connector = connector === undefined ? Connector : connector;

    // connect to the mongodb
    this.connection = await this.connector.connect();
    this.db = await this.connection.db(process.env.DB_DATABASE_DEV);
  }

  /**
   * close an existing connection
   */
  async close() {
    await this.connector.close(this.connection);
    this._cleanup();
  }

  /**
   * returns rows from a model
   * @param {string} model
   * @param {string} query
   * @param {array} fields
   */
  async get(model, query, fields) {
    fields = fields === undefined ? {} : fields;
    query = query === undefined ? {} : this._buildquery(query);

    return new Promise((resolve, reject) => {
      this.db
        .collection(model)
        .find(query, fields)
        .toArray()
        .then(res => {
          this.close();
          resolve(res.length === 0 ? [] : res);
        })
        .catch(err => {
          this.close();
          reject(err);
        });
    });
  }

  /**
   * cleans up the object upon init and also upon connection close
   */
  _cleanup() {
    this.db = null;
    this.connector = null;
    this.connection = null;
  }

  /**
   * transforms query object for get
   * @param {*} id
   */
  _buildquery(query) {
    // check for id and transform
    if (query._id !== undefined) {
      query._id = ObjectId(query._id);
    }
    // back you go
    return query;
  }
}

module.exports = new Db();
