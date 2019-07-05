import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles(theme => ({
  root: {
    width: '256px',
  },
  heading: {
    width: '256px',
    height: '120px',
    display: 'block',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
    // flexFlow: 'row-reverse || wrap'
    position: 'relative',
  },
  headingText: {
    // alignSelf: 'flex-end',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    // padding:
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export default function SettingsView() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.heading}>
        <div className={classes.buttonContainer}>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <ClearIcon />
          </IconButton>
        </div>
        <Typography variant="h5" className={classes.headingText}>
          Settings
        </Typography>
      </Paper>
    </div>
  )
}
