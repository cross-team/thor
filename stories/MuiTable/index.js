import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleTable from '../../page/MuiTable/SimpleTable'
import DenseTable from '../../page/MuiTable/DenseTable'

storiesOf('MuiTable', module).add('Simple Table', () => (
  <MoonProvider>
    <SimpleTable />
  </MoonProvider>
))
storiesOf('MuiTable', module).add('Dense Table', () => (
  <MoonProvider>
    <DenseTable />
  </MoonProvider>
))
