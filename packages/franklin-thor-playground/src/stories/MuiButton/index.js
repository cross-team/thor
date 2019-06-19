import React from 'react'
import { storiesOf } from '@storybook/react'
// import { boolean, text, select } from '@storybook/addon-knobs';
import { MuiButton, MuiFab } from '@franklin-thor/core'

const buttonStyle = {
  marginRight: '5px',
}

// Material UI Buttons

// Material UI MuiButton
storiesOf('MuiButton', module).add('Simple Material Button', () => (
  <div>
    <MuiButton variant="contained" style={buttonStyle}>
      Default
    </MuiButton>
    <MuiButton variant="contained" color="primary" style={buttonStyle}>
      Primary
    </MuiButton>
    <MuiButton variant="contained" color="secondary" style={buttonStyle}>
      Secondary
    </MuiButton>
    <MuiButton variant="contained" color="secondary" disabled style={buttonStyle}>
      Disabled
    </MuiButton>
  </div>
))

// Material UI Fab
storiesOf('MuiButton', module).add('Simple Material Fab', () => (
  <div>
    <MuiFab color="primary" aria-label="Add" style={buttonStyle} />
    <MuiFab color="secondary" aria-label="Edit" style={buttonStyle} />
    <MuiFab variant="extended" aria-label="Delete" style={buttonStyle}>
      Extended
    </MuiFab>
    <MuiFab disabled aria-label="Delete" style={buttonStyle} />
  </div>
))
