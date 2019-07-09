const { constants, relationshipValDef } = require('../models/themes.model')

module.exports = {
  get: {
    query: {
      groups_app_id: constants.groupsFLD.app.id.required(),
      groups_theme_id: constants.groupsFLD.theme.id.required(),
    },
    validate: relationshipValDef,
  },
}
