import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import CustomizedSwitches from '../../page/MuiSwitches/CustomSwitches'
import SimpleSwitches from '../../page/MuiSwitches/SimpleSwitches'

storiesOf('MuiSwitches', module).add('Custom Switches', () => (
  <MoonProvider>
    <CustomizedSwitches />
  </MoonProvider>
))
storiesOf('MuiSwitches', module).add('Simple Switches', () => (
  <MoonProvider>
    <SimpleSwitches />
  </MoonProvider>
))
