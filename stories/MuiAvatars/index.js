import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import ImageAvatars from '../../page/MuiAvatars/ImageAvatars'
import LetterAvatars from '../../page/MuiAvatars/LetterAvatars'
import IconAvatars from '../../page/MuiAvatars/IconAvatars'

storiesOf('MuiAvatars', module).add('Image Avatars', () => (
  <MoonProvider>
    <ImageAvatars />
  </MoonProvider>
))
storiesOf('MuiAvatars', module).add('Letter Avatars', () => (
  <MoonProvider>
    <LetterAvatars />
  </MoonProvider>
))
storiesOf('MuiAvatars', module).add('Icon Avatars', () => (
  <MoonProvider>
    <IconAvatars />
  </MoonProvider>
))
