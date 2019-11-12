import React from 'react'
import { storiesOf } from '@storybook/react'
import FTIDrawerHeading from '../../packages/franklin-thor-fti/src/FTIDrawerHeading'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'

const bool = true
const dummy = () => {}
const styleProps = { env: 'development' }

theme.then(apiTheme =>
  storiesOf('FTIDrawerHeading', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI DrawerHeading', () => (
      <FTIDrawerHeading
        isChild={bool}
        parent=""
        styleProps={styleProps}
        title="Drawer Heading"
        toggleDrawer={dummy}
        updateView={dummy}
      />
    )),
)