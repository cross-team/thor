import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import CustomizedBreadcrumbs from '../../page/MuiBreadcrumbs/CustomizedBreadcrumbs'
import SimpleBreadcrumbs from '../../page/MuiBreadcrumbs/SimpleBreadcrumbs'

storiesOf('MuiBreadcrumbs', module).add('Customized Breadcrumbs', () => <CustomizedBreadcrumbs />)
storiesOf('MuiBreadcrumbs', module).add('Simple Breadcrumbs', () => <SimpleBreadcrumbs />)
