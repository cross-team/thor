import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import ListDividers from '../../page/MuiDividers/ListDividers'
import MiddleDividers from '../../page/MuiDividers/MiddleDividers'

theme.then(apiTheme =>
  storiesOf('MuiDividers', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('List Dividers', () => <ListDividers />)
    .add('Middle Dividers', () => <MiddleDividers />),
)
