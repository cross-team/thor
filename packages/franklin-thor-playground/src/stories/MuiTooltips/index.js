import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleTooltips from '../../page/MuiTooltips/SimpleTooltips'
import PositionedTooltips from '../../page/MuiTooltips/PositionedTooltips'

storiesOf('MuiTooltips', module).add('Simple Tooltips', () => <SimpleTooltips />)
storiesOf('MuiTooltips', module).add('Positioned Tooltips', () => <PositionedTooltips />)
