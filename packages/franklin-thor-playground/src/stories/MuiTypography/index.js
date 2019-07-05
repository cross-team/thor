import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import Typography from '../../page/MuiTypography/Typography'

storiesOf('MuiTypography', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Typography', () => <Typography />)
