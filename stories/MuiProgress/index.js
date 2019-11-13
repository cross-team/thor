import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import Circular from '../../page/MuiProgress/Circular'
import Linear from '../../page/MuiProgress/Linear'

theme.then(apiTheme =>
  storiesOf('MuiProgress', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Circular', () => <Circular />)
    .add('Linear', () => <Linear />),
)
