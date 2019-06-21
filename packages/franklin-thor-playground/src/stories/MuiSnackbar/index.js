import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleSnackbar from '../../page/MuiSnackbar/SimpleSnackbar'
import PositionedSnackbar from '../../page/MuiSnackbar/PositionedSnackbar'

storiesOf('MuiSnackbar', module).add('Simple Snackbar', () => <SimpleSnackbar />)
storiesOf('MuiSnackbar', module).add('Positioned Snackbar', () => <PositionedSnackbar />)
