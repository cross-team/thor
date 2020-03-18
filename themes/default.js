import { createMuiTheme } from '@material-ui/core'
import defaultTokens from './default.tokens'

export default defaultTokens.then(themeTok => createMuiTheme(themeTok))
