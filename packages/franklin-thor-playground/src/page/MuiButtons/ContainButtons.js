import React from 'react'
// import MuiButton from '@material-ui/core/MuiButton';
import { MuiButton, makeStyles } from '@franklin-thor/core'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

export default function ContainedButtons() {
  const classes = useStyles()

  return (
    <div>
      <MuiButton variant="contained" className={classes.button}>
        Default
      </MuiButton>
      <MuiButton variant="contained" color="primary" className={classes.button}>
        Primary
      </MuiButton>
      <MuiButton variant="contained" color="secondary" className={classes.button}>
        Secondary
      </MuiButton>
      <MuiButton variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </MuiButton>
      <MuiButton variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </MuiButton>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <MuiButton variant="contained" component="span" className={classes.button}>
          Upload
        </MuiButton>
      </label>
    </div>
  )
}
