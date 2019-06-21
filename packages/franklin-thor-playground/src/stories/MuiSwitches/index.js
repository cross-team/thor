import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import CustomizedSwitches from '../../page/MuiSwitches/CustomSwitches'
import SimpleSwitches from '../../page/MuiSwitches/SimpleSwitches'

storiesOf('MuiSwitches', module).add('Custom Switches', () => <CustomizedSwitches />)
storiesOf('MuiSwitches', module).add('Simple Switches', () => <SimpleSwitches />)
