import React from 'react'
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Avatar,
} from '@franklin-thor/core/'
import {
  FontAwesomeIcon,
  faTicket,
  faRetweet,
  faUsers,
  faBuilding,
  faUserCircle,
  faFile,
} from '@franklin-thor/icons'
import FTIBadge from '../FTIBadge'
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

export default function FTICard(props) {
  const classes = useStyles()

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
          <div className={classes.container}>
            <FontAwesomeIcon icon={faFile} className={classes.icon} />
            <Typography variant="caption">{props.order.actNum}</Typography>
          </div>
          <div className={classes.container}>
            <FTIBadge type={props.order.type} />
            <Typography variant="h4">{props.order.traderName}</Typography>
          </div>
          <LinearProgress
            className={classes.progress}
            variant="determinate"
            value={props.order.progress}
          />
          <Typography variant="caption">
            {props.order.current} OF {props.order.max} - {props.order.progress}%
          </Typography>
          <br />
          <Typography variant="caption">USD {props.order.money}</Typography>
        </CardContent>
        <CardContent className={classes.rightContent}>
          <div className={classes.rightContainer}>
            <div>
              <FontAwesomeIcon icon={faTicket} className={classes.icon} />
              <Typography variant="caption">{props.order.orderNum}</Typography>
            </div>
            {props.order.automated ? (
              <Avatar className={classes.avatar}>
                <FontAwesomeIcon icon={faRetweet} className={classes.icon} />
              </Avatar>
            ) : (
              <div></div>
            )}
          </div>
          <div className={classes.rightContainer}>
            <div>
              <div className={classes.container}>
                <FontAwesomeIcon icon={faUsers} className={classes.icon} />
                <Typography variant="caption">{props.order.group}</Typography>
              </div>
              <div className={classes.container}>
                <FontAwesomeIcon icon={faBuilding} className={classes.icon} />
                <Typography variant="caption">{props.order.location}</Typography>
              </div>
              <div className={classes.container}>
                <FontAwesomeIcon icon={faUserCircle} className={classes.icon} />
                <Typography variant="caption">{props.order.trader}</Typography>
              </div>
            </div>
            <div className={classes.rightTextContainer}>
              <div className={classes.rightText}>
                <Typography variant="h4">{props.order.priceCurrent}</Typography>
              </div>
              <div className={classes.rightText}>
                <Typography variant="body2">{props.order.priceChange}</Typography>
              </div>
              <div className={classes.rightText}>
                <Typography variant="body2">{props.order.percentChange}</Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

FTICard.propTypes = {
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
