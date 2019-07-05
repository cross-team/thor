import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimplePopover from '../../page/MuiPopover/SimplePopover'
import HoverPopover from '../../page/MuiPopover/HoverPopover'

storiesOf('MuiPopover', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Popover', () => <SimplePopover />)
  .add('Hover Popover', () => <HoverPopover />)
