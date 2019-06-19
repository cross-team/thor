import React from 'react'
import { makeStyles, MuiFab, MuiIcon } from '@franklin-thor/core'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export default function FloatingActionButtons() {
  const classes = useStyles()

  return (
    <div>
      <MuiFab color="primary" aria-label="Add" className={classes.fab}>
        <MuiIcon>edit_icon</MuiIcon>
      </MuiFab>
      <MuiFab color="secondary" aria-label="Edit" className={classes.fab}>
        <MuiIcon>edit_icon</MuiIcon>
      </MuiFab>
      <MuiFab variant="extended" aria-label="Delete" className={classes.fab}>
        <MuiIcon>edit_icon</MuiIcon>
        Extended
      </MuiFab>
      <MuiFab disabled aria-label="Delete" className={classes.fab}>
        <MuiIcon>edit_icon</MuiIcon>
      </MuiFab>
    </div>
  )
}
