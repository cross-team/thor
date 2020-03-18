import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleList from '../../page/MuiList/SimpleList'
import NestedList from '../../page/MuiList/NestedList'

storiesOf('MuiList', module).add('Simple List', () => (
  <MoonProvider>
    <SimpleList />
  </MoonProvider>
))
storiesOf('MuiList', module).add('Nested List', () => (
  <MoonProvider>
    <NestedList />
  </MoonProvider>
))
