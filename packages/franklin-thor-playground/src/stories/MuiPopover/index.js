import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimplePopover from '../../page/MuiPopover/SimplePopover'
import HoverPopover from '../../page/MuiPopover/HoverPopover'

storiesOf('MuiPopover', module).add('Simple Popover', () => <SimplePopover />)
storiesOf('MuiPopover', module).add('Hover Popover', () => <HoverPopover />)
