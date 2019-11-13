import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleList from '../../page/MuiList/SimpleList'
import NestedList from '../../page/MuiList/NestedList'

theme.then(apiTheme =>
  storiesOf('MuiList', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple List', () => <SimpleList />)
    .add('Nested List', () => <NestedList />),
)
