import React from 'react'
import { makeStyles, Badge, Typography } from '@cross.team/core'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
}))

export default function DotBadge() {
  const classes = useStyles()

  return (
    <div>
      <div>
        <Badge className={classes.margin} color="primary" variant="dot">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} color="secondary" variant="dot">
          <MailIcon />
        </Badge>
      </div>
      <Badge color="primary" className={classes.margin} variant="dot">
        <Typography>Typography</Typography>
      </Badge>
    </div>
  )
}
