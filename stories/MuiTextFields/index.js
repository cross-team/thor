import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import TextFields from '../../page/TextFields'

storiesOf('MuiTextFields', module).add('Simple TextFields', () => (
  <MoonProvider>
    <TextFields />
  </MoonProvider>
))
