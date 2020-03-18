import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import Collapse from '../../page/MuiTransitions/Collapse'
import Slide from '../../page/MuiTransitions/Slide'
import Fade from '../../page/MuiTransitions/Fade'
import Zoom from '../../page/MuiTransitions/Zoom'

storiesOf('MuiTransitions', module).add('Collapse', () => (
  <MoonProvider>
    <Collapse />
  </MoonProvider>
))
storiesOf('MuiTransitions', module).add('Slide', () => (
  <MoonProvider>
    <Slide />
  </MoonProvider>
))
storiesOf('MuiTransitions', module).add('Fade', () => (
  <MoonProvider>
    <Fade />
  </MoonProvider>
))
storiesOf('MuiTransitions', module).add('Zoom', () => (
  <MoonProvider>
    <Zoom />
  </MoonProvider>
))
