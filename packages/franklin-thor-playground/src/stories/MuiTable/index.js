import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleTable from '../../page/MuiTable/SimpleTable'
import DenseTable from '../../page/MuiTable/DenseTable'

storiesOf('MuiTable', module).add('Simple Table', () => <SimpleTable />)
storiesOf('MuiTable', module).add('Dense Table', () => <DenseTable />)
