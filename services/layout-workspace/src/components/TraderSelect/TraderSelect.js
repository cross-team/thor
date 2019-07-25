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
} from '@material-ui/core'

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
  },
}))

export default function TraderSelect(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([0])

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

  return (
    <Paper className={classes.root}>
      <Paper className={classes.chipContainer}></Paper>
      <List className={classes.root}>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-label-${value}`

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
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}
