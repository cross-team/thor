const constants = require('./constants.model')

const name = 'themes'

// DEFINITIONS

const relationshipDef = [
  {
    $match: {
      $and: [
        {
          'groups.app.id': '<<appid>>',
        },
        {
          'groups.theme.id': '<<themeid>>',
        },
      ],
    },
  },
  {
    $group: {
      _id: '$groups.topic.name',
      keys: {
        $push: {
          doc_id: '$_id',
          key: '$key',
          value: '$value',
          based_on_key: '$based_on_key',
          calculated_value: '$calculated_value',
        },
      },
    },
  },
]

// FUNCTIONS

module.exports = {
  constants,
  name,
  relationshipDef,
}
