import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import ContainButtons from '../../page/MuiButtons/ContainButtons'
import TextButtons from '../../page/MuiButtons/TextButtons'
import OutlinedButtons from '../../page/MuiButtons/OutlinedButtons'
import FloatingActionButtons from '../../page/MuiButtons/FloatingActionButtons'
import ComplexButtons from '../../page/MuiButtons/ComplexButtons'

storiesOf('MuiButton', module).add('Text Buttons', () => (
  <MoonProvider>
    <TextButtons />
  </MoonProvider>
))
storiesOf('MuiButton', module).add('Complex Buttons', () => (
  <MoonProvider>
    <ComplexButtons />
  </MoonProvider>
))
storiesOf('MuiButton', module).add('Contained Buttons', () => (
  <MoonProvider>
    <ContainButtons />
  </MoonProvider>
))
storiesOf('MuiButton', module).add('Outlined Buttons', () => (
  <MoonProvider>
    <OutlinedButtons />
  </MoonProvider>
))
storiesOf('MuiButton', module).add('Floating Action Buttons', () => (
  <MoonProvider>
    <FloatingActionButtons />
  </MoonProvider>
))
