import React from 'react'
import Shell from './screens/Shell'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    themeName: 'Franklin Templeton',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Shell />
    </ThemeProvider>
  )
}

export default App
