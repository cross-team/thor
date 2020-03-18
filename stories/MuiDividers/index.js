import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import ListDividers from '../../page/MuiDividers/ListDividers'
import MiddleDividers from '../../page/MuiDividers/MiddleDividers'

storiesOf('MuiDividers', module).add('List Dividers', () => (
  <MoonProvider>
    <ListDividers />
  </MoonProvider>
))
storiesOf('MuiDividers', module).add('Middle Dividers', () => (
  <MoonProvider>
    <MiddleDividers />
  </MoonProvider>
))
