import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import ViewWeekIcon from '@material-ui/icons/ViewWeekOutlined'
import ViewListIcon from '@material-ui/icons/ViewListOutlined'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  switchLabel: {
    // fontSize: '8px',
  },
})

export default function FilterBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense" className={classes.container}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Find" />
            </Grid>
          </Grid>
          <div className={classes.container}>
            <IconButton color="inherit" aria-label="Columns">
              <ViewWeekIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="List">
              <ViewListIcon />
            </IconButton>
            <FormControl component="fieldset">
              <FormControlLabel
                value="top"
                control={<Switch color="primary" />}
                label="AUTO-ORDERS ON"
                labelPlacement="top"
                className={classes.switchLabel}
              />
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
