import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimplePopper from '../../page/MuiPopper/SimplePopper'
import MinimalPopper from '../../page/MuiPopper/MinimalPopper'

theme.then(apiTheme =>
  storiesOf('MuiPopper', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Popper', () => <SimplePopper />)
    .add('Minimal Popper', () => <MinimalPopper />),
)
