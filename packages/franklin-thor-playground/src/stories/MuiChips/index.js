import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleChips from '../../page/MuiChips/SimpleChips'
import OutlinedChips from '../../page/MuiChips/OutlinedChips'

storiesOf('MuiChips', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Chips', () => <SimpleChips />)
  .add('Outlined Chips', () => <OutlinedChips />)
