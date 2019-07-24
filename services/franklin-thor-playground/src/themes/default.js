import { createMuiTheme } from '@franklin-thor/core'
import defaultTokens from './default.tokens'

export default defaultTokens.then(themeTok => createMuiTheme(themeTok))
