import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import ArrowIcon from '@material-ui/icons/ArrowForwardIosRounded'
import SearchIcon from '@material-ui/icons/Search'
import DrawerHeading from '../../DrawerHeading/DrawerHeading'

const useStyles = makeStyles(theme => ({
  root: {
    width: '320px',
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
      <DrawerHeading
        isChild={false}
        title="Settings"
        updateView={props.updateView}
        toggleDrawer={props.toggleDrawer}
      />
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
