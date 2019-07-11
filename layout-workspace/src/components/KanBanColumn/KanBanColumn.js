import React, { Component, useEffect } from 'react'
import KanBanCard from '../KanBanCard/KanBanCard'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import { display } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    backgroundColor: '#191918',
  },
  root: {
    display: 'flex',
    width: '100%',
    height: '80vh',
    alignItems: 'stretch',
  },
}))

export default function KanBanColumn(props) {
  const [state, setState] = React.useState({
    mouseIsHovering: false,
  })

  const classes = useStyles()

  useEffect(() => {
    setState({ ...state, mouseIsHovering: false })
  }, [props])

  const generateKanbanCards = () => {
    return props.orders.slice(0).map(order => {
      return <KanBanCard order={order} key={order.orderNum} onDragEnd={props.onDragEnd} />
    })
  }

  return (
    <div
      className={classes.root}
      onDragEnter={e => {
        setState({ ...state, mouseIsHovering: true })
        props.onDragEnter(e, props.stage)
      }}
      onDragExit={e => {
        setState({ ...state, mouseIsHovering: true })
      }}
    >
      <Paper className={classes.container}>
        <Paper>
          <Typography variant="body2">{props.name}</Typography>
          <Switch defaultChecked value="checkedF" color="default" />
          <Typography variant="body1">Order Size</Typography>
        </Paper>
        {/*<Typography variant="h5" component="h3">
          {this.props.stage}. {this.props.name} ({this.props.orders.length})
        </Typography>*/}
        {generateKanbanCards()}
      </Paper>
    </div>
  )
}
