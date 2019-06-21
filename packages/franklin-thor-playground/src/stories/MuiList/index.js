import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleList from '../../page/MuiList/SimpleList'
import NestedList from '../../page/MuiList/NestedList'

storiesOf('MuiList', module).add('Simple List', () => <SimpleList />)
storiesOf('MuiList', module).add('Nested List', () => <NestedList />)
