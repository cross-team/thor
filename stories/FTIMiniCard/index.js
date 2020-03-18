import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIMini from '../../packages/franklin-thor-fti/src/FTIMiniCard'
import MoonProvider from '../../themes/moonProvider'

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

storiesOf('FTIMiniCard', module).add('FTI Mini Card', () => (
  <MoonProvider>
    <FTIMini miniCardData={miniCardData} />
  </MoonProvider>
))
