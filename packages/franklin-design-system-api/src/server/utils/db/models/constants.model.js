const _ = require('lodash')
const joi = require('joi')

const constants = {
  status: ['DRAFT', 'PUBLISH'],
  type: ['APP', 'THEME', 'TOPIC'],
}

const isIn = (value, key) => {
  if (_.isUndefined(constants[key])) {
    return false
  }
  return !(_.indexOf(constants[key], value) < 0)
}

// data structures
const metaDS = {
  created_on: null,
  updated_on: null,
  delete_on: null,
}

const relDS = {
  major: 0,
  minor: 0,
  build: 1,
}

const publishingDS = {
  status: 'DRAFT',
  publish_on: null,
}

const publishingFLD = {
  status: joi.string(),
  publish_on: joi.date().iso(),
}
const relFLD = {
  major: joi.number(),
  minor: joi.number(),
  build: joi.number(),
}

const metaFLD = {
  created_on: joi.date(),
  updated_on: joi.date(),
  delete_on: joi.date(),
}

const groupsFLD = {
  app: {
    id: joi.string(),
    name: joi.string(),
  },
  theme: {
    id: joi.string(),
    name: joi.string(),
  },
  topic: {
    id: joi.string(),
    name: joi.string(),
  },
}

module.exports = {
  constants,
  isIn,
  metaDS,
  relDS,
  publishingDS,
  publishingFLD,
  relFLD,
  metaFLD,
  groupsFLD,
}
