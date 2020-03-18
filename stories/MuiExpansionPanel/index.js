import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleExpansionPanel from '../../page/MuiExpansionPanel/SimpleExpansionPanel'
import ControlledAccordion from '../../page/MuiExpansionPanel/ControlledAccordion'

storiesOf('MuiExpansionPanel', module).add('Simple Expansion Panel', () => (
  <MoonProvider>
    <SimpleExpansionPanel />
  </MoonProvider>
))
storiesOf('MuiExpansionPanel', module).add('Controlled Accordion', () => (
  <MoonProvider>
    <ControlledAccordion />
  </MoonProvider>
))
