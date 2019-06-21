import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import Circular from '../../page/MuiProgress/Circular'
import Linear from '../../page/MuiProgress/Linear'

storiesOf('MuiProgress', module).add('Circular', () => <Circular />)
storiesOf('MuiProgress', module).add('Linear', () => <Linear />)
