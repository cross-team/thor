import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import FTIBlock from '../../page/FTIPatterns/FTIBlock/fti-block'
import theme from '../../themes/default'
import { ThemeProvider } from '@cross.team/core'

const blockCardData = {
  average: 7.33,
  broker: 'CHARLES SCHWAB',
  buy: true,
  currencyCode: 'USD',
  companyName: 'CA INVESTMENT SERVICES',
  fulfilled: 4000,
  orders: 20,
  percentChange: 3.8,
  placed: 2421,
  price: 4.4,
  status: 'PARTIALLY FILLED',
  symbol: 'MDR',
  totalAmount: 1987091,
  trader: 'LT2',
}

theme.then(apiTheme => {
  return storiesOf('FTIBlock', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI Block Card', () => <FTIBlock blockCardData={blockCardData} />)
})
