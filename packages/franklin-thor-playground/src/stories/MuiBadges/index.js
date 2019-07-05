import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleBadges from '../../page/MuiBadges/SimpleBadges'
import DotBadges from '../../page/MuiBadges/DotBadges'

storiesOf('MuiBadges', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Badges', () => <SimpleBadges />)
  .add('Dot Badges', () => <DotBadges />)
