import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIDrawerHeading from '../../page/FTIPatterns/FTIDrawerHeading/FTIDrawerHeading'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

const bool = true
const dummy = () => {}

theme.then(apiTheme =>
  storiesOf('FTICard', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI Card', () => (
      <FTIDrawerHeading
        isChild={bool}
        parent=""
        title="Heading Title"
        toggleDrawer={dummy}
        updateView={dummy}
      />
    )),
)
