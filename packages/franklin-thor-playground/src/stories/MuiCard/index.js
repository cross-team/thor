import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import SimpleCard from '../../page/MuiCard/SimpleCard'
import MediaCard from '../../page/MuiCard/MediaCard'

storiesOf('MuiCard', module).add('Simple Card', () => <SimpleCard />)
storiesOf('MuiCard', module).add('Media Card', () => <MediaCard />)
