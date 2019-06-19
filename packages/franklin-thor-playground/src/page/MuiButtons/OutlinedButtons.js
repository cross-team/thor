import React from 'react'
import { MuiButton, makeStyles } from '@franklin-thor/core'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

export default function OutlinedButtons() {
  const classes = useStyles()

  return (
    <div>
      <MuiButton variant="outlined" className={classes.button}>
        Default
      </MuiButton>
      <MuiButton variant="outlined" color="primary" className={classes.button}>
        Primary
      </MuiButton>
      <MuiButton variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </MuiButton>
      <MuiButton variant="outlined" disabled className={classes.button}>
        Disabled
      </MuiButton>
      <MuiButton variant="outlined" href="#outlined-buttons" className={classes.button}>
        Link
      </MuiButton>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <MuiButton variant="outlined" component="span" className={classes.button}>
          Upload
        </MuiButton>
      </label>
      <MuiButton variant="outlined" color="inherit" className={classes.button}>
        Inherit
      </MuiButton>
    </div>
  )
}
