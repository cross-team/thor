import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIBadge from '../../packages/franklin-thor-fti/src/FTIBadge'
import MoonProvider from '../../themes/moonProvider'

storiesOf('FTIBadge', module).add('FTI Badge Buy', () => (
  <MoonProvider>
    <FTIBadge type="buy" />
  </MoonProvider>
))
storiesOf('FTIBadge', module).add('FTI Badge Sell', () => (
  <MoonProvider>
    <FTIBadge type="sell" />
  </MoonProvider>
))

storiesOf('FTIBadge', module).add('FTIBadge', () => (
  <MoonProvider>
    <FTIBadge />
  </MoonProvider>
))
