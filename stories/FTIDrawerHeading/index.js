import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIDrawerHeading from '../../packages/franklin-thor-fti/src/FTIDrawerHeading'
import MoonProvider from '../../themes/moonProvider'

const bool = true
const dummy = () => {}
const styleProps = { env: 'development' }

storiesOf('FTIDrawerHeading', module).add('FTI DrawerHeading', () => (
  <MoonProvider>
    <FTIDrawerHeading
      isChild={bool}
      parent=""
      styleProps={styleProps}
      title="Drawer Heading"
      toggleDrawer={dummy}
      updateView={dummy}
    />
  </MoonProvider>
))
