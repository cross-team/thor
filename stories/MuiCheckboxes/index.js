import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleCheckbox from '../../page/MuiCheckboxes/SimpleCheckbox'
import CheckboxesGroup from '../../page/MuiCheckboxes/CheckboxesGroup'
import FormControlLabelPosition from '../../page/MuiCheckboxes/FormControlLabelPosition'

storiesOf('MuiCheckboxes', module).add('Simple Checkbox', () => (
  <MoonProvider>
    <SimpleCheckbox />
  </MoonProvider>
))
storiesOf('MuiCheckboxes', module).add('Checkboxes Group', () => (
  <MoonProvider>
    <CheckboxesGroup />
  </MoonProvider>
))
storiesOf('MuiCheckboxes', module).add('Label Placement', () => (
  <MoonProvider>
    <FormControlLabelPosition />
  </MoonProvider>
))
