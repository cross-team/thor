import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../themes/default'
import SimpleTransferList from '../../page/MuiTransferList/SimpleTransferList'
import EnhancedTransferList from '../../page/MuiTransferList/EnhancedTransferList'

storiesOf('MuiTransferList', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('Simple Transfer List', () => <SimpleTransferList />)
  .add('Enhanced Transfer List', () => <EnhancedTransferList />)
