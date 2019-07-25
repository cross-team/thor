import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/ClearRounded'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosRounded'

const useStyles = makeStyles(theme => ({
  heading: {
    width: '100%',
    height: '120px',
    display: 'block',
    position: 'relative',
    backgroundColor: '#3377FF',
  },
  headingText: {
    position: 'absolute',
    bottom: '0',
    paddingBottom: '16px',
    paddingLeft: '16px',
  },
  rootButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  backArrow: {
    paddingLeft: '16px',
  },
}))

export default function DeskHeading(props) {
  const classes = useStyles()

  return (
    <div className={classes.heading}>
      <div className={props.isChild ? classes.buttonContainer : classes.rootButtonContainer}>
        {props.isChild && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="List"
            onClick={props.updateView(props.parent)}
            className={classes.backArrow}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="List"
          onClick={props.toggleDrawer(false)}
        >
          <ClearIcon />
        </IconButton>
      </div>
      <Typography variant="h5" className={classes.headingText}>
        {props.title}
      </Typography>
    </div>
  )
}
