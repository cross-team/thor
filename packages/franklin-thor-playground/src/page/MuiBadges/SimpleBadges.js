import React from 'react'
import {
  makeStyles,
  Badge,
  IconButton,
  AppBar,
  Tab,
  Tabs,
  Typography,
  Button,
} from '@franklin-thor/core'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}))

export default function SimpleBadge() {
  const classes = useStyles()

  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <IconButton aria-label="4 pending messages" className={classes.margin}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
      </div>
      <AppBar position="static" className={classes.margin}>
        <Tabs value={0}>
          <Tab
            label={
              <Badge className={classes.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>
            }
          />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Typography className={classes.padding}>Typography</Typography>
      </Badge>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Button variant="contained">Button</Button>
      </Badge>
    </div>
  )
}
