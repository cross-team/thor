import React from 'react'
import { Typography, IconButton, makeStyles } from '@cross.team/core'
import { FontAwesomeIcon, faTimes, faChevronLeft } from '@cross.team/icons'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  heading: props => ({
    width: '100%',
    height: '120px',
    display: 'block',
    position: 'relative',
    backgroundColor: theme.palette[props.env],
  }),
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
    marginLeft: '0px',
  },
}))

export default function FTIDrawerHeading(props) {
  const classes = useStyles(props.styleProps)

  return (
    <div className={classes.heading}>
      <div className={props.isChild ? classes.buttonContainer : classes.rootButtonContainer}>
        {props.isChild && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back-button"
            onClick={props.updateView(props.parent)}
            className={classes.backArrow}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
        )}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close-settings"
          onClick={props.toggleDrawer(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
      </div>
      <Typography variant="h5" className={classes.headingText}>
        {props.title}
      </Typography>
    </div>
  )
}

FTIDrawerHeading.propTypes = {
  isChild: PropTypes.bool,
  parent: PropTypes.string,
  styleProps: PropTypes.object,
  title: PropTypes.string,
  toggleDrawer: PropTypes.func,
  updateView: PropTypes.func,
}
