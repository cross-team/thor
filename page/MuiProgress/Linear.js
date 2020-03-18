import React from 'react'
import { makeStyles, LinearProgress } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

export default function LinearIndeterminate() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>
  )
}
