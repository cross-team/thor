import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimplePopover from '../../page/MuiPopover/SimplePopover'
import HoverPopover from '../../page/MuiPopover/HoverPopover'

storiesOf('MuiPopover', module).add('Simple Popover', () => (
  <MoonProvider>
    <SimplePopover />
  </MoonProvider>
))
storiesOf('MuiPopover', module).add('Hover Popover', () => (
  <MoonProvider>
    <HoverPopover />
  </MoonProvider>
))
