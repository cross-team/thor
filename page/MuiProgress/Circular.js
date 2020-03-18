import React from 'react'
import { makeStyles, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}))

export default function CircularIndeterminate() {
  const classes = useStyles()

  return (
    <div>
      <CircularProgress className={classes.progress} />
      <CircularProgress className={classes.progress} color="secondary" />
    </div>
  )
}
