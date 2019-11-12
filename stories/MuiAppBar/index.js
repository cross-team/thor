import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import TopAppBar from '../../page/MuiAppBar/TopAppBar'
import BottomAppBar from '../../page/MuiAppBar/BottomAppBar'

theme.then(apiTheme =>
  storiesOf('MuiAppBar', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Top App Bar', () => <TopAppBar />)
    .add('Bottom App Bar', () => <BottomAppBar />),
)
