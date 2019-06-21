import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import DateAndTimePickers from '../../page/MuiPickers/DateAndTimePickers'

storiesOf('MuiPickers', module).add('Date Picker', () => <DateAndTimePickers />)
