import React from 'react'
import SettingsView from '../DrawerViews/Settings/SettingsView'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import PersonIcon from '@material-ui/icons/PersonOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Drawer from '@material-ui/core/Drawer'

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  tabGroup: {
    alignSelf: 'flex-end',
    // height: '64px'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  leftContainer: {
    // alignSelf: 'stretch',
    display: 'flex',
  },
}))

export default function TopNav(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [state, setState] = React.useState({
    drawer: false,
  })

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, drawer: open })
  }

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <div className={classes.leftContainer}>
            <IconButton edge="start" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Tabs value={value} onChange={handleChange} className={classes.tabGroup}>
              <Tab label="Orders" />
              <Tab label="Executions" />
              <Tab label="Securities" />
              <Tab label="Portfolios" />
              <Tab label="Allocations" />
            </Tabs>
            <IconButton edge="start" color="inherit" aria-label="More">
              <MoreIcon />
            </IconButton>
          </div>
          <div className={classes.buttonGroup}>
            <IconButton color="inherit" aria-label="Search" onClick={toggleDrawer(true)}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Users" onClick={toggleDrawer(true)}>
              <PeopleIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="User" onClick={toggleDrawer(true)}>
              <PersonIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Settings" onClick={toggleDrawer(true)}>
              <SettingsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={state.drawer} onClose={toggleDrawer(false)}>
        <SettingsView />
      </Drawer>
    </div>
  )
}
