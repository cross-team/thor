import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import FTICard from '../../page/FTIPatterns/FTICard/FTICard'
import FTIKanBanBoard from '../../page/FTIPatterns/FTIKanBanBoard/FTIKanBanBoard'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

const order = {
  type: 'buy',
  actNum: '01234-56789',
  traderName: 'MSFT',
  progress: 77,
  current: 16000,
  max: 20000,
  money: 300000,
  orderNum: 17608,
  automated: true,
  group: 'H1H',
  location: 'WZM',
  trader: 'DL1',
  priceCurrent: 101.82,
  priceChange: '+4.15',
  percentChange: 4.47,
  order_stage: 1,
}

theme.then(apiTheme =>
  storiesOf('FTICard', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI Card', () => (
      <FTICard order={order} key={order.orderNum} onDragEnd={FTIKanBanBoard.handleOnDragEnd} />
    )),
)
