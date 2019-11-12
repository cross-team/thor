import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleSelect from '../../page/MuiSelects/SimpleSelect'
import NativeSelects from '../../page/MuiSelects/NativeSelects'

theme.then(apiTheme =>
  storiesOf('MuiSelects', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Selects', () => <SimpleSelect />)
    .add('Native Selects', () => <NativeSelects />),
)
