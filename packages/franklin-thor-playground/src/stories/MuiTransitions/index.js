import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import Collapse from '../../page/MuiTransitions/Collapse'
import Slide from '../../page/MuiTransitions/Slide'
import Fade from '../../page/MuiTransitions/Fade'
import Zoom from '../../page/MuiTransitions/Zoom'

storiesOf('MuiTransitions', module).add('Collapse', () => <Collapse />)
storiesOf('MuiTransitions', module).add('Slide', () => <Slide />)
storiesOf('MuiTransitions', module).add('Fade', () => <Fade />)
storiesOf('MuiTransitions', module).add('Zoom', () => <Zoom />)
