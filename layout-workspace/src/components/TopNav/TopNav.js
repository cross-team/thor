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
  },
  leftContainer: {
    // alignSelf: 'stretch',
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

  const toggleDrawer = open => event => {
    console.log('toggleDrawer()')
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, drawerState: open })
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const updateView = view => event => {
    changeDrawer(view)
    toggleDrawer(true)(event)
  }

  const changeDrawer = view => {
    setDrawer(view)
    console.log('changeDrawer()')
  }

  const renderDrawer = () => {
    if (drawer === '') {
      return
    } else if (drawer === 'settings') {
      return <SettingsView toggleDrawer={toggleDrawer} updateView={updateView} />
    } else if (drawer === 'userSettings') {
      return <UserSettings toggleDrawer={toggleDrawer} updateView={updateView} />
    } else if (drawer === 'deskSettings') {
      return <DeskSettings toggleDrawer={toggleDrawer} updateView={updateView} />
    } else if (drawer === 'newUser') {
      return <UserAdmin toggleDrawer={toggleDrawer} updateView={updateView} />
    } else if (drawer === 'newDesk') {
      return <DeskAdmin toggleDrawer={toggleDrawer} updateView={updateView} />
    }
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
            <IconButton color="inherit" aria-label="Settings" onClick={updateView('settings')}>
              <SettingsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={state.drawerState} onClose={toggleDrawer(false)}>
        {renderDrawer()}
      </Drawer>
    </div>
  )
}
