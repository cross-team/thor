import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleChips from '../../page/MuiChips/SimpleChips'
import OutlinedChips from '../../page/MuiChips/OutlinedChips'

storiesOf('MuiChips', module).add('Simple Chips', () => <SimpleChips />)
storiesOf('MuiChips', module).add('Outlined Chips', () => <OutlinedChips />)
