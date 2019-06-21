import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import ButtonLink from '../../page/MuiLinks/ButtonLink'
import Links from '../../page/MuiLinks/Links'

storiesOf('MuiLinks', module).add('Simple Links', () => <Links />)
storiesOf('MuiLinks', module).add('Button Links', () => <ButtonLink />)
