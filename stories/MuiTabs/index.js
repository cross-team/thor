import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleTabs from '../../page/MuiTabs/SimpleTabs'
import ScrollableTabsButtonAuto from '../../page/MuiTabs/ScrollableTabsButtonAuto'

storiesOf('MuiTabs', module).add('Simple Tabs', () => (
  <MoonProvider>
    <SimpleTabs />
  </MoonProvider>
))
storiesOf('MuiTabs', module).add('Scrollable Tabs Button', () => (
  <MoonProvider>
    <ScrollableTabsButtonAuto />
  </MoonProvider>
))
