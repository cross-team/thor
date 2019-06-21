import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import TopAppBar from '../../page/MuiAppBar/TopAppBar'
import BottomAppBar from '../../page/MuiAppBar/BottomAppBar'

storiesOf('MuiAppBar', module).add('Top App Bar', () => <TopAppBar />)
storiesOf('MuiAppBar', module).add('Bottom App Bar', () => <BottomAppBar />)
