import React from 'react';
import { Button } from '@franklin-thor/core';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import theme from 'themes/default';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    // <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // </MuiThemeProvider>
  );
}

export default App;