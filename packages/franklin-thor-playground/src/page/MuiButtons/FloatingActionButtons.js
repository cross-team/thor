import React from 'react'
import { Fab, makeStyles } from '@franklin-thor/core'
import { Add, Delete, Edit, Navigation } from '@franklin-thor/icons'
// import AddIcon from '@material-ui/icons/Add'

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
        <Add />
      </Fab>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Edit />
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <Navigation className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab disabled aria-label="Delete" className={classes.fab}>
        <Delete />
      </Fab>
    </div>
  )
}
