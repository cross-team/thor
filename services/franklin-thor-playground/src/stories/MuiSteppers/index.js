import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import HorizontalLinearStepper from '../../page/MuiSteppers/HorizontalLinearStepper'
import HorizontalNonLinearStepperWithError from '../../page/MuiSteppers/HorizontalNonLinearStepperWithError'

theme.then(apiTheme =>
  storiesOf('MuiSteppers', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Horizontal Linear Stepper', () => <HorizontalLinearStepper />)
    .add('Horizontal NonLinear StepperWith Error', () => <HorizontalNonLinearStepperWithError />),
)