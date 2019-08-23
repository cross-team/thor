import { createMuiTheme } from '@cross.team/core'
import defaultTokens from './default.tokens'

export default defaultTokens.then(themeTok => createMuiTheme(themeTok))
