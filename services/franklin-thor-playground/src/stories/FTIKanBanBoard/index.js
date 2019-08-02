import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIKanBanBoard from '../../page/FTIPatterns/FTIKanBanBoard/FTIKanBanBoard'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import orderList from './orderList'

theme.then(apiTheme =>
  storiesOf('FTIKanBanBoard', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI KanBan Board', () => <FTIKanBanBoard data={orderList} />),
)
