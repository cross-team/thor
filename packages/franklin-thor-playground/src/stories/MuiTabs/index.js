import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleTabs from '../../page/MuiTabs/SimpleTabs'
import ScrollableTabsButtonAuto from '../../page/MuiTabs/ScrollableTabsButtonAuto'

storiesOf('MuiTabs', module).add('Simple Tabs', () => <SimpleTabs />)
storiesOf('MuiTabs', module).add('Scrollable Tabs Button', () => <ScrollableTabsButtonAuto />)
