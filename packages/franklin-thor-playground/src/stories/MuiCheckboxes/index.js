import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleCheckbox from '../../page/MuiCheckboxes/SimpleCheckbox'
import CheckboxesGroup from '../../page/MuiCheckboxes/CheckboxesGroup'
import FormControlLabelPosition from '../../page/MuiCheckboxes/FormControlLabelPosition'

storiesOf('MuiCheckboxes', module).add('Simple Checkbox', () => <SimpleCheckbox />)
storiesOf('MuiCheckboxes', module).add('Label Placement', () => <FormControlLabelPosition />)
storiesOf('MuiCheckboxes', module).add('Checkboxes Group', () => <CheckboxesGroup />)
