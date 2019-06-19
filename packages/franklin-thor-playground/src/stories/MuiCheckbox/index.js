import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleCheckbox from '../../page/MuiCheckbox/SimpleCheckbox'

storiesOf('MuiCheckbox', module).add('Simple Checkbox', () => <SimpleCheckbox />)
