import React from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
})

export default function LabelBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  )
}
