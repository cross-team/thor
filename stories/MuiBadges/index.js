import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleBadges from '../../page/MuiBadges/SimpleBadges'
import DotBadges from '../../page/MuiBadges/DotBadges'

storiesOf('MuiBadges', module).add('Simple Badges', () => (
  <MoonProvider>
    <SimpleBadges />
  </MoonProvider>
))
storiesOf('MuiBadges', module).add('Dot Badges', () => (
  <MoonProvider>
    <DotBadges />
  </MoonProvider>
))
