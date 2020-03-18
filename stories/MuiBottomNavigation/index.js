import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import LabelBottomNavigation from '../../page/MuiBottomNavigation/LabelBottomNavigation'
import SimpleBottomNavigation from '../../page/MuiBottomNavigation/SimpleBottomNavigation'

storiesOf('MuiBottomNavigation', module).add('Bottom Navigation', () => (
  <MoonProvider>
    <LabelBottomNavigation />
  </MoonProvider>
))
storiesOf('MuiBottomNavigation', module).add('Bottom Navigation with no Label', () => (
  <MoonProvider>
    <SimpleBottomNavigation />
  </MoonProvider>
))
