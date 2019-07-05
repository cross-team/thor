import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '@material-ui/styles'
// import { boolean, text, select } from '@storybook/addon-knobs';
import ContainButtons from '../../page/MuiButtons/ContainButtons'
import TextButtons from '../../page/MuiButtons/TextButtons'
import OutlinedButtons from '../../page/MuiButtons/OutlinedButtons'
import FloatingActionButtons from '../../page/MuiButtons/FloatingActionButtons'
import ComplexButtons from '../../page/MuiButtons/ComplexButtons'
import theme from '../../themes/default'

storiesOf('MuiButton', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Text Buttons', () => <TextButtons />)
  .add('Complex Buttons', () => <ComplexButtons />)
  .add('Contained Buttons', () => <ContainButtons />)
  .add('Outlined Buttons', () => <OutlinedButtons />)
  .add('Floating Action Buttons', () => <FloatingActionButtons />)
