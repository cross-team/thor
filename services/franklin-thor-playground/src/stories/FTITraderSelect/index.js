import React from 'react'
import { storiesOf } from '@storybook/react'
import FTITraderSelect from '../../page/FTIPatterns/FTITraderSelect/FTITraderSelect'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

theme.then(apiTheme =>
  storiesOf('FTITraderSelect', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI KanBan Board', () => <FTITraderSelect label="TRADER SELECT" />),
)
