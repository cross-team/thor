import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import HorizontalLinearStepper from '../../page/MuiSteppers/HorizontalLinearStepper'
import HorizontalNonLinearStepperWithError from '../../page/MuiSteppers/HorizontalNonLinearStepperWithError'

storiesOf('MuiSteppers', module).add('Horizontal Linear Stepper', () => (
  <MoonProvider>
    <HorizontalLinearStepper />
  </MoonProvider>
))
storiesOf('MuiSteppers', module).add('Horizontal NonLinear StepperWith Error', () => (
  <MoonProvider>
    <HorizontalNonLinearStepperWithError />
  </MoonProvider>
))
