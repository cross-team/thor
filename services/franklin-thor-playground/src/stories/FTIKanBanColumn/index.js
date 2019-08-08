import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIKanBanColumn from '../../page/FTIPatterns/FTIKanBanColumn/FTIKanBanColumn'
import FTIKanBanBoard from '../../page/FTIPatterns/FTIKanBanBoard/FTIKanBanBoard'
import orderList from '../FTIKanBanBoard/orderList'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

theme.then(apiTheme =>
  storiesOf('FTIKanBanColumn', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI KanBan Column', () => (
      <FTIKanBanColumn
        name="Desk Orders"
        stage="1"
        orders={orderList.filter(order => {
          return parseInt(order.order_stage, 10) === 1
        })}
        onDragEnter={FTIKanBanBoard.handleOnDragEnter}
        onDragEnd={FTIKanBanBoard.handleOnDragEnd}
        key="1"
      />
    )),
)
