import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleMenu from '../../page/MuiMenus/SimpleMenu'
import MenuListComposition from '../../page/MuiMenus/MenuListComposition'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

theme.then(apiTheme =>
  storiesOf('MuiMenus', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Menu', () => <SimpleMenu />)
    .add('MenuList Composition', () => <MenuListComposition />),
)
