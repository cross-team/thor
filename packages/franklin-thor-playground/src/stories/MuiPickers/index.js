import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import DateAndTimePickers from '../../page/MuiPickers/DateAndTimePickers'

storiesOf('MuiPickers', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Date Picker', () => <DateAndTimePickers />)
