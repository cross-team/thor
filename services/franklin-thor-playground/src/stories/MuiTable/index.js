import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleTable from '../../page/MuiTable/SimpleTable'
import DenseTable from '../../page/MuiTable/DenseTable'

theme.then(apiTheme =>
  storiesOf('MuiTable', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Table', () => <SimpleTable />)
    .add('Dense Table', () => <DenseTable />),
)
