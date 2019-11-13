import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import Collapse from '../../page/MuiTransitions/Collapse'
import Slide from '../../page/MuiTransitions/Slide'
import Fade from '../../page/MuiTransitions/Fade'
import Zoom from '../../page/MuiTransitions/Zoom'

theme.then(apiTheme =>
  storiesOf('MuiTransitions', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Collapse', () => <Collapse />)
    .add('Slide', () => <Slide />)
    .add('Fade', () => <Fade />)
    .add('Zoom', () => <Zoom />),
)
