import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import SimpleTransferList from '../../page/MuiTransferList/SimpleTransferList'
import EnhancedTransferList from '../../page/MuiTransferList/EnhancedTransferList'

storiesOf('MuiTransferList', module).add('Simple Transfer List', () => (
  <MoonProvider>
    <SimpleTransferList />
  </MoonProvider>
))
storiesOf('MuiTransferList', module).add('Enhanced Transfer List', () => (
  <MoonProvider>
    <EnhancedTransferList />
  </MoonProvider>
))
