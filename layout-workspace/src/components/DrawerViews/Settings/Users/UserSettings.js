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
import ClearIcon from '@material-ui/icons/ClearRounded'
import AddIcon from '@material-ui/icons/AddRounded'
import SearchIcon from '@material-ui/icons/Search'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIosRounded'

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
    justifyContent: 'space-between',
  },
  backArrow: {
    paddingLeft: '16px',
  },
}))

export default function UserSettings(props) {
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
            onClick={props.updateView('settings')}
            className={classes.backArrow}
          >
            <ArrowBackIcon />
          </IconButton>
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
          Users
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
        <ListItem button onClick={props.updateView('newUser')}>
          <ListItemText primary="Add New User" />
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Jacklyn Cameo" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Jasmin Dimick" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Carolyn Feller" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="John Harris" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Jaqueline Harrison" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Lawrence Lambright" />
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}
