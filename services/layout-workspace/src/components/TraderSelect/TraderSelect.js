import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Chip,
} from '@material-ui/core'
import { log } from 'handlebars'

const useStyles = makeStyles(theme => ({
  root: {
    height: '264',
    width: '94%',
    backgroundColor: '#333230',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  chipContainer: {
    height: '43px',
    width: '96%',
    backgroundColor: '#0D0D0C',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
  },
}))

export default function TraderSelect(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([])
  const traders = {
    0: '[CDA] Chistopher Darcy',
    1: '[DJB] Don Johnson',
    2: '[JKI] Jason Killian',
    3: '[BMA] Beth Mason',
    4: '[NRO] Nancy Robertson',
  }
  const traderKeys = Object.keys(traders)
  const traderValues = Object.values(traders)

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const chips = checked.map(value => (
    <Chip label={traderValues[value]} className={classes.chip} color="primary" />
  ))

  return (
    <Paper className={classes.root}>
      <Paper className={classes.chipContainer}>{chips}</Paper>
      <List className={classes.root}>
        {traderKeys.map(value => {
          const labelId = `checkbox-list-label-${value}`
          console.log(traders)
          return (
            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${traderValues[value]}`} />
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}
