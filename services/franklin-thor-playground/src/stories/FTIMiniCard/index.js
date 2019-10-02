import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIMini from '../../page/FTIPatterns/FTIMini/fti-mini'
import theme from '../../themes/default'
import { ThemeProvider } from '@cross.team/core'

const miniCardData = {
  average: 7.33,
  broker: 'CHARLES SCHWAB',
  buy: true,
  currencyCode: 'USD',
  companyName: 'CA INVESTMENT SERVICES',
  fulfilled: 4000,
  percentChange: 3.8,
  placed: 2421,
  price: 4.4,
  status: 'PARTIALLY FILLED',
  symbol: 'MDR',
  trader: 'LT2',
}

theme.then(apiTheme => {
  return storiesOf('MiniCard', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI Mini Card', () => <FTIMini miniCardData={miniCardData} />)
})
