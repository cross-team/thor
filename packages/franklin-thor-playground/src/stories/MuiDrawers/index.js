import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import TemporaryDrawer from '../../page/MuiDrawers/TemporaryDrawer'
import PermanentDrawerLeft from '../../page/MuiDrawers/PermanentDrawerLeft'

storiesOf('MuiDrawers', module).add('Temporary Drawer', () => <TemporaryDrawer />)
storiesOf('PermanentDrawerLeft', module).add('Permanent Drawer Left', () => <PermanentDrawerLeft />)
