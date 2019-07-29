import React from 'react'
import SettingsView from '../DrawerViews/Settings/SettingsView'
import UserSettings from '../DrawerViews/Settings/Users/UserSettings'
import UserAdmin from '../DrawerViews/Settings/Users/UserAdmin'
import DeskSettings from '../DrawerViews/Settings/Desks/DeskSettings'
import DeskAdmin from '../DrawerViews/Settings/Desks/DeskAdmin'
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
    backgroundColor: '#262624',
  },
  leftContainer: {
    display: 'flex',
  },
}))

export default function TopNav(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [drawer, setDrawer] = React.useState('')
  const [state, setState] = React.useState({
    drawerState: false,
  })

  // This function opens and closes the drawer
  const toggleDrawer = open => event => {
    console.log('toggleDrawer()')
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, drawerState: open })
  }

  // This function handles setting the state when the user clicks a tab
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // This function updates the state on what's being displayed in the drawers and passed to each drawer view so that they may also control the view
  const updateView = view => event => {
    setDrawer(view)
    toggleDrawer(true)(event)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.appBar}>
          {/* This div contains the hamburger menu icon and the tab menu */}
          <div className={classes.leftContainer}>
            <IconButton edge="start" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabGroup}
              indicatorColor="primary"
            >
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

          {/* This div contains the various buttons that control the drawer */}
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
            <IconButton color="inherit" aria-label="Settings" onClick={updateView('settings')}>
              <SettingsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={state.drawerState} onClose={toggleDrawer(false)}>
        {(() => {
          switch (drawer) {
            case '':
              break
            case 'settings':
              return <SettingsView toggleDrawer={toggleDrawer} updateView={updateView} />
            case 'userSettings':
              return <UserSettings toggleDrawer={toggleDrawer} updateView={updateView} />
            case 'deskSettings':
              return <DeskSettings toggleDrawer={toggleDrawer} updateView={updateView} />
            case 'newUser':
              return <UserAdmin toggleDrawer={toggleDrawer} updateView={updateView} />
            case 'newDesk':
              return <DeskAdmin toggleDrawer={toggleDrawer} updateView={updateView} />
            default:
              break
          }
        })()}
        {/* This function renders the view into the drawer depending on the drawer value of the state */}
      </Drawer>
    </div>
  )
}
