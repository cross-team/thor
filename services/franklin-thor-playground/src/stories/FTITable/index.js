import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import FTITable from '../../page/FTIPatterns/FTITable/FTITable'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

theme.then(apiTheme =>
  storiesOf('FTITable', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI Table', () => <FTITable />),
)
