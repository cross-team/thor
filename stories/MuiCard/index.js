import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleCard from '../../page/MuiCard/SimpleCard'
import MediaCard from '../../page/MuiCard/MediaCard'

theme.then(apiTheme =>
  storiesOf('MuiCard', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Card', () => <SimpleCard />)
    .add('Media Card', () => <MediaCard />),
)
