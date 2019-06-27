import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleMenu from '../../page/MuiMenus/SimpleMenu'
import MenuListComposition from '../../page/MuiMenus/MenuListComposition'

storiesOf('MuiMenus', module)
  .add('Simple Menu', () => <SimpleMenu />)
  .add('MenuList Composition', () => <MenuListComposition />)
