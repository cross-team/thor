import React from 'react'
import { storiesOf } from '@storybook/react'
import MoonProvider from '../../themes/moonProvider'
import CustomizedBreadcrumbs from '../../page/MuiBreadcrumbs/CustomizedBreadcrumbs'
import SimpleBreadcrumbs from '../../page/MuiBreadcrumbs/SimpleBreadcrumbs'

storiesOf('MuiBreadcrumbs', module).add('Simple Breadcrumbs', () => (
  <MoonProvider>
    <SimpleBreadcrumbs />
  </MoonProvider>
))
storiesOf('MuiBreadcrumbs', module).add('Customized Breadcrumbs', () => (
  <MoonProvider>
    <CustomizedBreadcrumbs />
  </MoonProvider>
))
