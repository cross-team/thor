import React from 'react'
import { makeStyles, List, ListItem, ListItemText, Divider } from '@cross.team/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function ListDividers() {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.root} aria-label="Mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
  )
}
