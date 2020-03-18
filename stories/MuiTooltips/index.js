import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleTooltips from '../../page/MuiTooltips/SimpleTooltips'
import PositionedTooltips from '../../page/MuiTooltips/PositionedTooltips'

storiesOf('MuiTooltips', module).add('Simple Tooltips', () => (
  <MoonProvider>
    <SimpleTooltips />
  </MoonProvider>
))
storiesOf('MuiTooltips', module).add('Positioned Tooltips', () => (
  <MoonProvider>
    <PositionedTooltips />
  </MoonProvider>
))
