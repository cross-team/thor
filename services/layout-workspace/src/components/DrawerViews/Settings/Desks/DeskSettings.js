import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/AddRounded'
import SearchIcon from '@material-ui/icons/Search'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIosRounded'
import DrawerHeading from '../../../DrawerHeading/DrawerHeading'

const useStyles = makeStyles(theme => ({
  root: {
    width: '320px',
  },
}))

export default function DeskSettings(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* This div contains the heading of the drawers view */}
      <DrawerHeading
        isChild={true}
        parent="settings"
        title="Desks"
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
        <ListItem button onClick={props.updateView('newDesk')}>
          <ListItemText primary="Add New Desk" />
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="FTL" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="DUB" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="EDI" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="NEL" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="CMP" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="HK" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="CAL" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="SHL" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="KOR" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}
