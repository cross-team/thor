import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import TopAppBar from '../../page/MuiAppBar/TopAppBar'
import BottomAppBar from '../../page/MuiAppBar/BottomAppBar'

storiesOf('MuiAppBar', module).add('Top App Bar', () => (
  <MoonProvider>
    <TopAppBar />
  </MoonProvider>
))
storiesOf('MuiAppBar', module).add('Bottom App Bar', () => (
  <MoonProvider>
    <BottomAppBar />
  </MoonProvider>
))
