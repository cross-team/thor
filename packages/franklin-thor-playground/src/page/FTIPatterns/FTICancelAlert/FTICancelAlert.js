import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  alert: {
    backgroundColor: theme.palette.primary,
    width: '256px',
    height: '216px',
  },
  text: {
    color: '#E5E2DA',
  },
  title: {
    fontWeight: '1',
    color: '#E5E2DA',
  },
  yes: {
    backgroundColor: '#263238',
    color: '#E5E2DA',
    // width: 96,
    // height: 48
    margin: 0,
  },
  no: {
    color: '#666461',
    margin: 0,
  },
  selection: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 0,
  },
}))

export default function FTICancelAlert() {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.alert}>
          <DialogTitle id="alert-dialog-title" className={classes.title}>
            Cancel Order
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className={classes.text}>
              Are you sure you wish to cancel the selected broker orders?
            </DialogContentText>
          </DialogContent>
          <div className={classes.selection}>
            <DialogActions>
              <Button onClick={handleClose} color="primary" className={classes.no}>
                NO
              </Button>
              <Button onClick={handleClose} color="primary" className={classes.yes} autoFocus>
                YES
              </Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
