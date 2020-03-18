import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import Modal from '../../page/MuiModal/Modal'

storiesOf('MuiModal', module).add('Modal', () => (
  <MoonProvider>
    <Modal />
  </MoonProvider>
))
