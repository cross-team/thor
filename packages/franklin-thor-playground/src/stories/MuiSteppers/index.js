import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import HorizontalLinearStepper from '../../page/MuiSteppers/HorizontalLinearStepper'
import HorizontalNonLinearStepperWithError from '../../page/MuiSteppers/HorizontalNonLinearStepperWithError'

storiesOf('MuiSteppers', module).add('Horizontal Linear Stepper', () => <HorizontalLinearStepper />)
storiesOf('MuiSteppers', module).add('Horizontal NonLinear StepperWith Error', () => (
  <HorizontalNonLinearStepperWithError />
))
