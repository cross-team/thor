import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import TemporaryDrawer from '../../page/MuiDrawers/TemporaryDrawer'
import PermanentDrawerLeft from '../../page/MuiDrawers/PermanentDrawerLeft'

theme.then(apiTheme =>
  storiesOf('MuiDrawers', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Temporary Drawer', () => <TemporaryDrawer />)
    .add('Permanent Drawer Left', () => <PermanentDrawerLeft />),
)
