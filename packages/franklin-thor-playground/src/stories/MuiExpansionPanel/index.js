import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleExpansionPanel from '../../page/MuiExpansionPanel/SimpleExpansionPanel'
import ControlledAccordion from '../../page/MuiExpansionPanel/ControlledAccordion'

storiesOf('MuiExpansionPanel', module).add('Simple Expansion Panel', () => <SimpleExpansionPanel />)
storiesOf('MuiExpansionPanel', module).add('Controlled Accordion', () => <ControlledAccordion />)
