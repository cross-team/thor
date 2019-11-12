import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '@material-ui/styles'
import TextFields from '../../page/TextFields'
import theme from '../../themes/default'

theme.then(apiTheme =>
  storiesOf('MuiTextFields', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple TextFields', () => <TextFields />),
)
