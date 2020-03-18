import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import Typography from '../../page/MuiTypography/Typography'

storiesOf('MuiTypography', module).add('Typography', () => (
  <MoonProvider>
    <Typography />
  </MoonProvider>
))
