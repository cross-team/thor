import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleSnackbar from '../../page/MuiSnackbar/SimpleSnackbar'
import PositionedSnackbar from '../../page/MuiSnackbar/PositionedSnackbar'

storiesOf('MuiSnackbar', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Snackbar', () => <SimpleSnackbar />)
  .add('Positioned Snackbar', () => <PositionedSnackbar />)
