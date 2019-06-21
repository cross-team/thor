import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import ImageAvatars from '../../page/MuiAvatars/ImageAvatars'
import LetterAvatars from '../../page/MuiAvatars/LetterAvatars'
import IconAvatars from '../../page/MuiAvatars/IconAvatars'

storiesOf('MuiAvatars', module).add('Image Avatars', () => <ImageAvatars />)
storiesOf('MuiAvatars', module).add('Letter Avatars', () => <LetterAvatars />)
storiesOf('MuiAvatars', module).add('Icon Avatars', () => <IconAvatars />)
