import React from 'react'
import { storiesOf } from '@storybook/react'
import Showcase from '../../page/Showcase'
import MoonProvider from '../../themes/moonProvider'

storiesOf('MuiShowcase', module).add('Showcase', () => (
  <MoonProvider>
    <Showcase />
  </MoonProvider>
))
