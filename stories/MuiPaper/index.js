import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import Paper from '../../page/MuiPaper/Paper'

theme.then(apiTheme =>
  storiesOf('MuiPaper', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Paper', () => <Paper />),
)
