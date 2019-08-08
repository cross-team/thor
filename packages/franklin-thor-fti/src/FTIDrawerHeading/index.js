import React from 'react'
import { Typography, IconButton, makeStyles } from '@franklin-thor/core'
import { FontAwesomeIcon, faTimes, faChevronLeft } from '@franklin-thor/icons'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
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
})

export default function FTIDrawerHeading(props) {
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
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
        )}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="List"
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
  title: PropTypes.string,
  toggleDrawer: PropTypes.func,
  updateView: PropTypes.func,
}
