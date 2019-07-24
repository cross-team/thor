/* eslint-disable import/order */
/* eslint-disable no-underscore-dangle */
const _ = require('lodash')
require('dotenv').config()

const ObjectId = require('mongodb').ObjectId
const Connector = require('./connector')
const flatten = require('../lib/flatten')

// PRIVATE LOCAL FUNCTIONS

/**
 * loops through an array and adds mongoDB objectID
 * @param {Array} values
 */
const _tfmMongoId = values => {
  const cleaned = []
  // eslint-disable-next-line no-restricted-syntax
  for (const value of values) {
    if (!_.isUndefined(value._id)) {
      value._id = ObjectId(value._id)
    }
    cleaned.push(value)
  }
  return cleaned
}

/**
 * transforms values object for get
 * @param {Array} values
 */
const _buildquery = values => {
  // these are the operators we're considering
  const transformed = {}
  // $and
  if (!_.isUndefined(values.$and)) {
    transformed.$and = _tfmMongoId(values.$and)
    transformed.$and = flatten.toDotArray(transformed.$and)
  }
  // $or
  if (!_.isUndefined(values.$or)) {
    transformed.$or = _tfmMongoId(values.$or)
    transformed.$or = flatten.toDotArray(transformed.$or)
  }
  // _id
  if (!_.isUndefined(values._id)) {
    const id = _tfmMongoId([values])[0]
    transformed._id = id._id
  }
  // back you go
  return transformed
}

// MAIN CLASS
class Db {
  constructor() {
    this._cleanup()
  }

  /**
   * connects mongodb, establishes a connection and loads required parms to Db object
   * @param {connector} connector
   */
  async connect(connector) {
    this.connector = connector === undefined ? Connector : connector
    this.connection = await this.connector.connect()
    this.db = await this.connection.db(process.env.DB_DATABASE_DEV)
  }

  /**
   * close an existing connection
   */
  async close() {
    try {
      if (!_.isUndefined(this.connector) && !_.isNull(this.connector)) {
        await this.connector.close(this.connection)
      }
      this._cleanup()
    } catch (err) {
      throw new Error(err)
    }
  }

  /**
   * returns the relationships between tokens
   * @param {string} model
   * @param {JSON} def
   */
  async aggregate(model, def) {
    await this.connect()
    return new Promise((resolve, reject) => {
      this.db
        .collection(model)
        .aggregate(def)
        .toArray()
        .then(res => {
          this.close()
          resolve(res.length === 0 ? [] : res)
        })
        .catch(err => {
          this.close()
          reject(err)
        })
    })
  }

  /**
   * returns rows from a model
   * @param {string} model
   * @param {string} qry
   * @param {array} flds
   */
  async get(model, qry, flds) {
    const fields = _.isUndefined(flds) ? {} : flds
    const query = _.isUndefined(qry) ? {} : _buildquery(qry)
    await this.connect()
    return new Promise((resolve, reject) => {
      this.db
        .collection(model)
        .find(query, fields)
        .toArray()
        .then(res => {
          this.close()
          resolve(res.length === 0 ? [] : res)
        })
        .catch(err => {
          this.close()
          reject(err)
        })
    })
  }

  /**
   * updates document into a collection
   * @param {string} model
   * @param {string} qry
   * @param {object} flds
   */
  async update(model, qry, flds) {
    const options = { upsert: false }
    const fields = { $set: flatten.toDot(flds) }
    await this.connect()
    const query = _.isUndefined(qry._id) ? {} : _buildquery(qry)
    return new Promise((resolve, reject) => {
      this.db
        .collection(model)
        .updateMany(query, fields, options)
        .then(res => {
          this.close()
          resolve({
            matchedCount: res.matchedCount || res.result.nModified,
          })
        })
        .catch(err => {
          this.close()
          reject(err)
        })
    })
  }

  /**
   * inserts a document into a collection
   * @param {string} model
   * @param {object} flds
   */
  async insert(model, flds) {
    await this.connect()
    return new Promise((resolve, reject) => {
      this.db
        .collection(model)
        .insertOne(flds)
        .then(res => {
          this.close()
          resolve({
            insertedId: res.insertedId,
            insertedCount: res.insertedCount,
          })
        })
        .catch(err => {
          this.close()
          reject(err)
        })
    })
  }

  /**
   * removes a document from a collection
   * @param {string} model
   * @param {string} qry
   */
  async remove(model, qry, hard = null) {
    if (!_.isNull(hard)) {
      return this.update(model, qry, hard)
    }
    const query = _.isUndefined(qry) ? {} : _buildquery(qry)
    await this.connect()
    return new Promise((resolve, reject) => {
      this.db
        .collection(model)
        .deleteOne(query)
        .then(res => {
          this.close()
          resolve({
            deletedCount: res.deletedCount,
          })
        })
        .catch(err => {
          this.close()
          reject(err)
        })
    })
  }

  /**
   * cleans up the object upon init and also upon connection close
   */
  _cleanup() {
    this.db = null
    this.connector = null
    this.connection = null
  }
}

module.exports = new Db()
