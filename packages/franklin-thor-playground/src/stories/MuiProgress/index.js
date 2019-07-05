import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import Circular from '../../page/MuiProgress/Circular'
import Linear from '../../page/MuiProgress/Linear'

storiesOf('MuiProgress', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Circular', () => <Circular />)
  .add('Linear', () => <Linear />)
