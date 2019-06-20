import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleTransferList from '../../page/MuiTransferList/SimpleTransferList'
import EnhancedTransferList from '../../page/MuiTransferList/EnhancedTransferList'

storiesOf('MuiTransferList', module).add('Simple Transfer List', () => <SimpleTransferList />)
storiesOf('MuiTransferList', module).add('Enhanced Transfer List', () => <EnhancedTransferList />)
