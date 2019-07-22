import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleTooltips from '../../page/MuiTooltips/SimpleTooltips'
import PositionedTooltips from '../../page/MuiTooltips/PositionedTooltips'

theme.then(apiTheme =>
  storiesOf('MuiTooltips', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Tooltips', () => <SimpleTooltips />)
    .add('Positioned Tooltips', () => <PositionedTooltips />),
)
