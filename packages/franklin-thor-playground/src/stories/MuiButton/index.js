import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import ContainButtons from '../../page/MuiButtons/ContainButtons'
import TextButtons from '../../page/MuiButtons/TextButtons'
import OutlinedButtons from '../../page/MuiButtons/OutlinedButtons'
import FloatingActionButtons from '../../page/MuiButtons/FloatingActionButtons'
import ComplexButtons from '../../page/MuiButtons/ComplexButtons'

storiesOf('MuiButton', module).add('Complex Buttons', () => <ComplexButtons />)
storiesOf('MuiButton', module).add('Floating Action Buttons', () => <FloatingActionButtons />)
storiesOf('MuiButton', module).add('Contained Buttons', () => <ContainButtons />)
storiesOf('MuiButton', module).add('Text Buttons', () => <TextButtons />)
storiesOf('MuiButton', module).add('Outlined Buttons', () => <OutlinedButtons />)
