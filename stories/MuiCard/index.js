import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleCard from '../../page/MuiCard/SimpleCard'
import MediaCard from '../../page/MuiCard/MediaCard'

storiesOf('MuiCard', module).add('Simple Card', () => (
  <MoonProvider>
    <SimpleCard />
  </MoonProvider>
))
storiesOf('MuiCard', module).add('Media Card', () => (
  <MoonProvider>
    <MediaCard />
  </MoonProvider>
))
