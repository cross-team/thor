import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleTabs from '../../page/MuiTabs/SimpleTabs'
import ScrollableTabsButtonAuto from '../../page/MuiTabs/ScrollableTabsButtonAuto'

storiesOf('MuiTabs', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Tabs', () => <SimpleTabs />)
  .add('Scrollable Tabs Button', () => <ScrollableTabsButtonAuto />)
