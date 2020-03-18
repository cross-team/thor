import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import TemporaryDrawer from '../../page/MuiDrawers/TemporaryDrawer'
import PermanentDrawerLeft from '../../page/MuiDrawers/PermanentDrawerLeft'

storiesOf('MuiDrawers', module).add('Temporary Drawer', () => (
  <MoonProvider>
    <TemporaryDrawer />
  </MoonProvider>
))
storiesOf('MuiDrawers', module).add('Permanent Drawer Left', () => (
  <MoonProvider>
    <PermanentDrawerLeft />
  </MoonProvider>
))
