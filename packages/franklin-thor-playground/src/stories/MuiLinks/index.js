import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import ButtonLink from '../../page/MuiLinks/ButtonLink'
import Links from '../../page/MuiLinks/Links'

storiesOf('MuiLinks', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Links', () => <Links />)
  .add('Button Links', () => <ButtonLink />)
