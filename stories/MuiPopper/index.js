import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimplePopper from '../../page/MuiPopper/SimplePopper'
import MinimalPopper from '../../page/MuiPopper/MinimalPopper'

storiesOf('MuiPopper', module).add('Simple Popper', () => (
  <MoonProvider>
    <SimplePopper />
  </MoonProvider>
))
storiesOf('MuiPopper', module).add('Minimal Popper', () => (
  <MoonProvider>
    <MinimalPopper />
  </MoonProvider>
))
