import { configure, addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { themes } from '@storybook/theming'
import '@storybook/addon-console'

addParameters({
  options: {
    theme: themes.dark,
  },
})

function loadStories() {
  require('stories/FTIBadge')
  require('stories/FTICancelAlert')
  require('stories/FTICard')
  require('stories/FTIKanBanColumn')
  require('stories/FTIKanBanBoard')
  require('stories/FTITable')
  require('stories/FTITraderSelect')
  require('stories/FTIDrawerHeading')
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
  require('stories/MuiBottomNavigation')
  require('stories/MuiBreadcrumbs')
  require('stories/MuiDrawers')
  require('stories/MuiLinks')
  require('stories/MuiMenus')
  require('stories/MuiSteppers')
  require('stories/MuiSteppers')
  require('stories/MuiTabs')
  require('stories/MuiAvatars')
  require('stories/MuiBadges')
  require('stories/MuiChips')
  require('stories/MuiDividers')
  require('stories/MuiList')
  require('stories/MuiTable')
  require('stories/MuiTooltips')
  require('stories/MuiTypography')
  require('stories/MuiModal')
  require('stories/MuiPopover')
  require('stories/MuiPopper')
  require('stories/MuiPortal')
  require('stories/MuiTransitions')
}
addDecorator(withKnobs)

configure(loadStories, module)
