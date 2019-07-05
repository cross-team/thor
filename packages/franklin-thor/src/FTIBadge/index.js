import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const styles = {
  buy: {
    backgroundColor: '#13BE95',
    color: '#fff',
    fontWeight: 'bold',
    // fontSize: '8px',
    // width: '12px',
    // height: '12px',
    // fontFamily: 'Roboto'
  },
  sell: {
    backgroundColor: '#DF4444',
    color: '#fff',
    fontWeight: 'bold',
    // fontSize: '8px',
    // width: '12px',
    // height: '12px',
    // fontFamily: 'Roboto'
  },
}

function FTIBadge(props) {
  const { classes } = props
  const type = props.type
  return (
    // props.type will contain a value of either 'buy' or 'sell'
    <div>
      <Avatar className={classes[props.type]}>{type === 'buy' ? 'B' : 'S'}</Avatar>
    </div>
  )
}

export default withStyles(styles)(FTIBadge)
