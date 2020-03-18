import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import Paper from '../../page/MuiPaper/Paper'

storiesOf('MuiPaper', module).add('Paper', () => (
  <MoonProvider>
    <Paper />
  </MoonProvider>
))
