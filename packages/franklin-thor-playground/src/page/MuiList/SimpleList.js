import React from 'react'
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@franklin-thor/core'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

export default function SimpleList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="Secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  )
}
