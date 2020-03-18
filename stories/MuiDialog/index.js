import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import Alert from '../../page/MuiDialog/Alert'

storiesOf('MuiDialog', module).add('Alert', () => (
  <MoonProvider>
    <Alert />
  </MoonProvider>
))
