import { configure, addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import '@storybook/addon-console'

function loadStories() {
  //require('stories/Button')
  //require('stories/Showcase')
  //require('stories/Checkboxes')
  //require('stories/Selects')
  //require('stories/Switches')
  //require('stories/TextFields')
  require('stories/MuiButton')
  require('stories/MuiCheckboxes')
  require('stories/MuiPickers')
  require('stories/MuiSwitches')
  require('stories/MuiSelects')
  require('stories/MuiTransferList')
  require('stories/MuiAppBar')
  require('stories/MuiPaper')
  require('stories/MuiCard')
  require('stories/MuiExpansionPanel')
  require('stories/MuiProgress')
  require('stories/MuiDialog')
  require('stories/MuiSnackbar')
}

addDecorator(withKnobs)

configure(loadStories, module)
