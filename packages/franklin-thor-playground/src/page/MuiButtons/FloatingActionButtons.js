import React from 'react'
import { Fab, makeStyles } from '@franklin-thor/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import NavigationIcon from '@material-ui/icons/Navigation'

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
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <EditIcon />
      </Fab>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab disabled aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  )
}
