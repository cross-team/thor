import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleExpansionPanel from '../../page/MuiExpansionPanel/SimpleExpansionPanel'
import ControlledAccordion from '../../page/MuiExpansionPanel/ControlledAccordion'

theme.then(apiTheme =>
  storiesOf('MuiExpansionPanel', module)
    .addDecorator(getStory => <ThemeProvider theme={apiTheme}>{getStory()}</ThemeProvider>)
    .add('Simple Expansion Panel', () => <SimpleExpansionPanel />)
    .add('Controlled Accordion', () => <ControlledAccordion />),
)
