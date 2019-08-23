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

const useStyles = makeStyles({
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '256px',
    margin: '8px',
    backgroundColor: '#262524',
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexBasis: '50%',
  },
  rightContent: {
    flexBasis: '50%',
  },
  avatar: {
    width: '20px',
    height: '20px',
  },
  rightTextContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  rightText: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
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
      <Card className={classes.cardContainer}>
        <CardContent className={classes.leftContent}>
          <Checkbox color="default" value={checked} onChange={handleChange} />
        </CardContent>
      </Card>
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
