import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import ArrowIcon from '@material-ui/icons/ArrowForwardIosRounded'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    width: '320px',
  },
  heading: {
    width: '100%',
    height: '120px',
    display: 'block',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
    // flexFlow: 'row-reverse || wrap'
    position: 'relative',
    backgroundColor: '#3377FF',
  },
  headingText: {
    // alignSelf: 'flex-end',
    position: 'absolute',
    bottom: '0',
    paddingBottom: '16px',
    paddingLeft: '16px',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItemIcon: {
    maxWidth: '24px',
  },
}))

export default function SettingsView(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* This div contains the heading of the drawers view */}
      <div className={classes.heading}>
        <div className={classes.buttonContainer}>
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
          Settings
        </Typography>
      </div>

      {/* This List contains the menu items of the drawer view */}
      <List>
        <ListItem>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <TextField label="Find" />
        </ListItem>
        <ListItem button onClick={props.updateView('userSettings')} className={classes.listItem}>
          <ListItemText primary="Users" />
          <ListItemIcon className={classes.listItemIcon}>
            <ArrowIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={props.updateView('deskSettings')}>
          <ListItemText primary="Desks" />
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Brokers" />
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Strategies" />
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="General" />
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}
