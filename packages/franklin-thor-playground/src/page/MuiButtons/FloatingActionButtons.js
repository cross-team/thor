import React from 'react'
import { makeStyles, Fab, Icon } from '@franklin-thor/core'

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
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <Icon>edit_icon</Icon>
        Extended
      </Fab>
      <Fab disabled aria-label="Delete" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab>
    </div>
  )
}
