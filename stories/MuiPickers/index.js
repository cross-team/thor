import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import DateAndTimePickers from '../../page/MuiPickers/DateAndTimePickers'

storiesOf('MuiPickers', module).add('Date Picker', () => (
  <MoonProvider>
    <DateAndTimePickers />
  </MoonProvider>
))
