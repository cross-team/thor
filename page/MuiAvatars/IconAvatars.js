import React from 'react'
import { makeStyles, Avatar, Grid } from '@material-ui/core'
import { green, pink } from '@material-ui/core/colors'
import FolderIcon from '@material-ui/icons/Folder'
import PageviewIcon from '@material-ui/icons/Pageview'
import AssignmentIcon from '@material-ui/icons/Assignment'

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
})

export default function IconAvatars() {
  const classes = useStyles()

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar className={classes.avatar}>
        <FolderIcon />
      </Avatar>
      <Avatar className={classes.pinkAvatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
    </Grid>
  )
}
