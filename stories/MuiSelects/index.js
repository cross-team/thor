import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleSelect from '../../page/MuiSelects/SimpleSelect'
import NativeSelects from '../../page/MuiSelects/NativeSelects'

storiesOf('MuiSelects', module).add('Simple Selects', () => (
  <MoonProvider>
    <SimpleSelect />
  </MoonProvider>
))
storiesOf('MuiSelects', module).add('Native Selects', () => (
  <MoonProvider>
    <NativeSelects />
  </MoonProvider>
))
