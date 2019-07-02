import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import ImageAvatars from '../../page/MuiAvatars/ImageAvatars'
import LetterAvatars from '../../page/MuiAvatars/LetterAvatars'
import IconAvatars from '../../page/MuiAvatars/IconAvatars'

storiesOf('MuiAvatars', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Image Avatars', () => <ImageAvatars />)
  .add('Letter Avatars', () => <LetterAvatars />)
  .add('Icon Avatars', () => <IconAvatars />)
