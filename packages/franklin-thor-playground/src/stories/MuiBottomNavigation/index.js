import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import LabelBottomNavigation from '../../page/MuiBottomNavigation/LabelBottomNavigation'
import SimpleBottomNavigation from '../../page/MuiBottomNavigation/SimpleBottomNavigation'

storiesOf('MuiBottomNavigation', module).add('Bottom Navigation', () => <LabelBottomNavigation />)
storiesOf('MuiBottomNavigation', module).add('Bottom Navigation with no Label', () => (
  <SimpleBottomNavigation />
))
