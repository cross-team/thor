import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleSelect from '../../page/MuiSelects/SimpleSelect'
import NativeSelects from '../../page/MuiSelects/NativeSelects'

storiesOf('MuiSelects', module).add('Simple Selects', () => <SimpleSelect />)
storiesOf('MuiSelects', module).add('Native Selects', () => <NativeSelects />)
