import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleChips from '../../page/MuiChips/SimpleChips'
import OutlinedChips from '../../page/MuiChips/OutlinedChips'

storiesOf('MuiChips', module).add('Simple Chips', () => (
  <MoonProvider>
    <SimpleChips />
  </MoonProvider>
))
storiesOf('MuiChips', module).add('Outlined Chips', () => (
  <MoonProvider>
    <OutlinedChips />
  </MoonProvider>
))
