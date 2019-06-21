import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import ListDividers from '../../page/MuiDividers/ListDividers'
import MiddleDividers from '../../page/MuiDividers/MiddleDividers'

storiesOf('MuiDividers', module).add('List Dividers', () => <ListDividers />)
storiesOf('MuiDividers', module).add('Middle Dividers', () => <MiddleDividers />)
