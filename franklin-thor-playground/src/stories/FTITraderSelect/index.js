import React from 'react'
import { storiesOf } from '@storybook/react'
import FTITraderSelect from '../../page/FTIPatterns/FTITraderSelect/FTITraderSelect'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

const traders = {
  0: '[CDA] Chistopher Darcy',
  1: '[DJB] Don Johnson',
  2: '[JKI] Jason Killian',
  3: '[BMA] Beth Mason',
  4: '[NRO] Nancy Robertson',
}

theme.then(apiTheme =>
  storiesOf('FTITraderSelect', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI KanBan Board', () => <FTITraderSelect label="TRADER SELECT" traders={traders} />),
)
