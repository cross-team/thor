import React from 'react'
import { makeStyles, Popper, Typography, Button, Fade, Paper } from '@franklin-thor/core'

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}))

export default function SimplePopper() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  )
}
