import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleCheckbox from '../../page/MuiCheckbox/SimpleCheckbox'
import CheckboxesGroup from '../../page/MuiCheckbox/CheckboxesGroup'
import FormControlLabelPosition from '../../page/MuiCheckbox/FormControlLabelPosition'

storiesOf('MuiCheckbox', module).add('Simple Checkbox', () => <SimpleCheckbox />)
storiesOf('MuiCheckbox', module).add('Label Placement', () => <FormControlLabelPosition />)
storiesOf('MuiCheckbox', module).add('Checkboxes Group', () => <CheckboxesGroup />)
