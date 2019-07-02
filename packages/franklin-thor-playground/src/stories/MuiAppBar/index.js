import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import TopAppBar from '../../page/MuiAppBar/TopAppBar'
import BottomAppBar from '../../page/MuiAppBar/BottomAppBar'

storiesOf('MuiAppBar', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Top App Bar', () => <TopAppBar />)
  .add('Bottom App Bar', () => <BottomAppBar />)
