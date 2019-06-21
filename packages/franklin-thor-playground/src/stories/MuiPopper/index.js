import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimplePopper from '../../page/MuiPopper/SimplePopper'
import MinimalPopper from '../../page/MuiPopper/MinimalPopper'

storiesOf('MuiPopper', module).add('Simple Popper', () => <SimplePopper />)
storiesOf('MuiPopper', module).add('Minimal Popper', () => <MinimalPopper />)
