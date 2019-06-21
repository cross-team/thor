import React from 'react'
import { makeStyles, Avatar, Grid } from '@franklin-thor/core'

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
})

export default function ImageAvatars() {
  const classes = useStyles()

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Remy Sharp"
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
        className={classes.avatar}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
        className={classes.bigAvatar}
      />
    </Grid>
  )
}
