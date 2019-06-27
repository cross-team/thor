import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import LabelBottomNavigation from '../../page/MuiBottomNavigation/LabelBottomNavigation'
import SimpleBottomNavigation from '../../page/MuiBottomNavigation/SimpleBottomNavigation'

storiesOf('MuiBottomNavigation', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Bottom Navigation', () => <LabelBottomNavigation />)
  .add('Bottom Navigation with no Label', () => <SimpleBottomNavigation />)
