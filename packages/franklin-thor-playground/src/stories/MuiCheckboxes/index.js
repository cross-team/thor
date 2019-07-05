import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleCheckbox from '../../page/MuiCheckboxes/SimpleCheckbox'
import CheckboxesGroup from '../../page/MuiCheckboxes/CheckboxesGroup'
import FormControlLabelPosition from '../../page/MuiCheckboxes/FormControlLabelPosition'

storiesOf('MuiCheckboxes', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Checkbox', () => <SimpleCheckbox />)
  .add('Checkboxes Group', () => <CheckboxesGroup />)
  .add('Label Placement', () => <FormControlLabelPosition />)
