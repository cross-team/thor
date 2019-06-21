import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleBadges from '../../page/MuiBadges/SimpleBadges'
import DotBadges from '../../page/MuiBadges/DotBadges'

storiesOf('MuiBadges', module).add('Simple Badges', () => <SimpleBadges />)
storiesOf('MuiBadges', module).add('Dot Badges', () => <DotBadges />)
