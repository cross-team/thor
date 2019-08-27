import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import FTIBlock from '../../page/FTIPatterns/FTIBlock/fti-block'
import theme from '../../themes/default'
import { ThemeProvider } from '@cross.team/core'

theme.then(apiTheme =>
  storiesOf('FTIBlock', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('FTI Badge Buy', () => <FTIBlock type="buy" />),
)
