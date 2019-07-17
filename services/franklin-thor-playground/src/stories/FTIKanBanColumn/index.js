import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIKanBanColumn from '../../page/FTIPatterns/FTIKanBanColumn/FTIKanBanColumn'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

theme.then(apiTheme =>
  storiesOf('FTIKanBanColumn', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI KanBan Column', () => <FTIKanBanColumn />),
)
