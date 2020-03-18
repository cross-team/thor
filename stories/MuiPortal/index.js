import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import Portal from '../../page/MuiPortal/Portal'

storiesOf('MuiPortal', module).add('Portal', () => (
  <MoonProvider>
    <Portal />
  </MoonProvider>
))
