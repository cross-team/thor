import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import ButtonLink from '../../page/MuiLinks/ButtonLink'
import Links from '../../page/MuiLinks/Links'

storiesOf('MuiLinks', module).add('Simple Links', () => (
  <MoonProvider>
    <Links />
  </MoonProvider>
))
storiesOf('MuiLinks', module).add('Button Links', () => (
  <MoonProvider>
    <ButtonLink />
  </MoonProvider>
))
