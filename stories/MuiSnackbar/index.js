import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleSnackbar from '../../page/MuiSnackbar/SimpleSnackbar'
import PositionedSnackbar from '../../page/MuiSnackbar/PositionedSnackbar'

storiesOf('MuiSnackbar', module).add('Simple Snackbar', () => (
  <MoonProvider>
    <SimpleSnackbar />
  </MoonProvider>
))
storiesOf('MuiSnackbar', module).add('Positioned Snackbar', () => (
  <MoonProvider>
    <PositionedSnackbar />
  </MoonProvider>
))
