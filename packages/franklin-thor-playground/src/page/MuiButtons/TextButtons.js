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

export default function TextButtons() {
  const classes = useStyles()

  return (
    <div>
      <MuiButton className={classes.button}>Default</MuiButton>
      <MuiButton color="primary" className={classes.button}>
        Primary
      </MuiButton>
      <MuiButton color="secondary" className={classes.button}>
        Secondary
      </MuiButton>
      <MuiButton disabled className={classes.button}>
        Disabled
      </MuiButton>
      <MuiButton href="#text-buttons" className={classes.button}>
        Link
      </MuiButton>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />
      <label htmlFor="text-button-file">
        <MuiButton component="span" className={classes.button}>
          Upload
        </MuiButton>
      </label>
    </div>
  )
}
