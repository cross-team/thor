import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import FTIBlock from '../../packages/franklin-thor-fti/src/FTIBlockCard'
import MoonProvider from '../../themes/moonProvider'

const blockCardData = {
  average: 7.33,
  broker: 'CHARLES SCHWAB',
  buy: true,
  currencyCode: 'USD',
  companyName: 'CA INVESTMENT SERVICES',
  fulfilled: 4000,
  orders: 20,
  orderDate: '2019-08-09T12:17:38.000+0000',
  percentChange: 3.8,
  placed: 2421,
  price: 4.4,
  status: 'PARTIALLY FILLED',
  symbol: 'MDR',
  totalAmount: 1987091.567,
  trader: 'LT2',
}

storiesOf('FTIBlockCard', module).add('FTI Block Card', () => (
  <MoonProvider>
    <FTIBlock blockCardData={blockCardData} />
  </MoonProvider>
))
