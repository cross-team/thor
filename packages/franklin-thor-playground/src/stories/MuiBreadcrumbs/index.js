import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import CustomizedBreadcrumbs from '../../page/MuiBreadcrumbs/CustomizedBreadcrumbs'
import SimpleBreadcrumbs from '../../page/MuiBreadcrumbs/SimpleBreadcrumbs'

storiesOf('MuiBreadcrumbs', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Customized Breadcrumbs', () => <CustomizedBreadcrumbs />)
  .add('Simple Breadcrumbs', () => <SimpleBreadcrumbs />)
