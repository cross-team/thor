import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import CustomizedSwitches from '../../page/MuiSwitches/CustomSwitches'
import SimpleSwitches from '../../page/MuiSwitches/SimpleSwitches'

storiesOf('MuiSwitches', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Custom Switches', () => <CustomizedSwitches />)
  .add('Simple Switches', () => <SimpleSwitches />)
