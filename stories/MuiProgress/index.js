import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import Circular from '../../page/MuiProgress/Circular'
import Linear from '../../page/MuiProgress/Linear'

storiesOf('MuiProgress', module).add('Circular', () => (
  <MoonProvider>
    <Circular />
  </MoonProvider>
))
storiesOf('MuiProgress', module).add('Linear', () => (
  <MoonProvider>
    <Linear />
  </MoonProvider>
))
