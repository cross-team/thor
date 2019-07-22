import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import ButtonLink from '../../page/MuiLinks/ButtonLink'
import Links from '../../page/MuiLinks/Links'

theme.then(apiTheme =>
  storiesOf('MuiLinks', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Links', () => <Links />)
    .add('Button Links', () => <ButtonLink />),
)
