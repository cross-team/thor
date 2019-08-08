import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  buy: {
    backgroundColor: '#13BE95',
    color: '#fff',
    fontWeight: 'bold',
  },
  sell: {
    backgroundColor: '#DF4444',
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default function FTIBadge(props) {
  const classes = useStyles()
  const type = props.type
  return (
    // props.type will contain a value of either 'buy' or 'sell'
    <div>
      <Avatar className={classes[props.type]}>{type === 'buy' ? 'B' : 'S'}</Avatar>
    </div>
  )
}

FTIBadge.propTypes = {
  type: PropTypes.string,
}
