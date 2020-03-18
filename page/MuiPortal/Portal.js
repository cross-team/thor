import React from 'react'
import { makeStyles, Portal, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  alert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: '1px solid',
    borderColor: theme.palette.text.primary,
  },
}))

export default function SimplePortal() {
  const [show, setShow] = React.useState(false)
  const container = React.useRef(null)
  const classes = useStyles()

  function handleClick() {
    setShow(!show)
  }

  return (
    <div>
      <Button onClick={handleClick}>{show ? 'Unmount children' : 'Mount children'}</Button>
      <div className={classes.alert}>
        <Typography>It looks like I will render here.</Typography>
        {show ? (
          <Portal container={container.current}>
            <Typography>But I actually render here!</Typography>
          </Portal>
        ) : null}
      </div>
      <div className={classes.alert} ref={container} />
    </div>
  )
}
