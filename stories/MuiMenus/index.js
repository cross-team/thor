import React from 'react'
import { storiesOf } from '@storybook/react'
import SimpleMenu from '../../page/MuiMenus/SimpleMenu'
import MenuListComposition from '../../page/MuiMenus/MenuListComposition'
import MoonProvider from '../../themes/moonProvider'

storiesOf('MuiMenus', module).add('Simple Menu', () => (
  <MoonProvider>
    <SimpleMenu />
  </MoonProvider>
))
storiesOf('MuiMenus', module).add('MenuList Composition', () => (
  <MoonProvider>
    <MenuListComposition />
  </MoonProvider>
))
