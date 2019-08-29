import React from 'react'
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Avatar,
  Checkbox,
} from '@franklin-thor/core/'
import {} from '@franklin-thor/icons'
import FTIBadge from '../FTIBadge/FTIBadge'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => {
  console.log(theme)

  return {
    icon: {
      width: '12px',
      height: '12px',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    progress: {
      width: '100px',
    },
    cardContainer: {
      width: '237px',
      margin: '8px',
      backgroundColor: theme.palette['card-bg-color'],
      border: `1px solid ${theme.palette['card-border-color']}`,
      borderRadius: '8px',
      height: '37px',
      display: 'flex',
      alignItems: 'center',
    },
    identifier: {
      color: theme.palette.light['900'],
      fontFamily: theme.typography['identifier:fontFamily'],
      fontSize: theme.typography['identifier:fontSize'],
      fontWeight: theme.typography['identifier:fontWeight'],
      lineHeight: theme.typography['identifier:lineHeight'],
    },
    data: {
      color: theme.palette.light['900'],
      fontFamily: 'Roboto',
      fontSize: '8px',
      fontWeight: '500',
      lineHeight: '8px',
    },
    leftContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  }
})

export default function FTIMiniCard(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  return (
    // props.type will contain a value of either 'buy' or 'sell'
    // props.actNum will contain a string with the trader's account number
    // props.traderName will contain a string with the trader's name
    //
    <div
      draggable
      onDragEnd={e => {
        props.onDragEnd(e, props.order)
      }}
    >
      <div className={classes.cardContainer}>
        <Checkbox color="default" value={checked} onChange={handleChange} />
        <div className={classes.leftContent}>
          <Typography className={classes.identifier}>IDENTIFIER</Typography>
          <Typography className={classes.data}>DATA-SM</Typography>
        </div>
      </div>
    </div>
  )
}

FTIMiniCard.propTypes = {
  onDragEnd: PropTypes.func,
  order: {
    actNum: PropTypes.number,
    automated: PropTypes.bool,
    current: PropTypes.number,
    group: PropTypes.string,
    location: PropTypes.string,
    max: PropTypes.number,
    money: PropTypes.number,
    orderNum: PropTypes.number,
    percentChange: PropTypes.string,
    priceChange: PropTypes.string,
    priceCurrent: PropTypes.number,
    progress: PropTypes.number,
    trader: PropTypes.string,
    traderName: PropTypes.string,
    type: PropTypes.string,
  },
}
