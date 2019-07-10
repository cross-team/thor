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
import AccountIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SwapIcon from '@material-ui/icons/SwapHorizontalCircle'
import GroupIcon from '@material-ui/icons/Group'
import LocationIcon from '@material-ui/icons/LocationCityOutlined'
import TraderIcon from '@material-ui/icons/AccountCircleOutlined'
import FTIBadge from '../FTIBadge/FTIBadge'

const useStyles = makeStyles(theme => ({
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
    // maxWidth: '344px'
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
}))

export default function FTICard(props) {
  const classes = useStyles()

  return (
    // props.type will contain a value of either 'buy' or 'sell'
    // props.actNum will contain a string with the trader's account number
    // props.traderName will contain a string with the trader's name
    //
    <div>
      <Card className={classes.cardContainer}>
        <CardContent className={classes.leftContent}>
          <div className={classes.container}>
            <FontAwesomeIcon icon={faFile} className={classes.icon} />
            <Typography variant="caption">{props.actNum}</Typography>
          </div>
          <div className={classes.container}>
            <FTIBadge type={props.type} />
            <Typography variant="h4">{props.traderName}</Typography>
          </div>
          <LinearProgress
            className={classes.progress}
            variant="determinate"
            value={props.progress}
          />
          <Typography variant="caption">
            {props.current} OF {props.max} - {props.progress}%
          </Typography>
          <br />
          <Typography variant="caption">USD {props.money}</Typography>
        </CardContent>
        <CardContent className={classes.rightContent}>
          <div className={classes.rightContainer}>
            <div>
              <FontAwesomeIcon icon={faTicket} className={classes.icon} />
              <Typography variant="caption">{props.orderNum}</Typography>
            </div>
            {props.automated ? (
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
                <Typography variant="caption">{props.group}</Typography>
              </div>
              <div className={classes.container}>
                <FontAwesomeIcon icon={faBuilding} className={classes.icon} />
                <Typography variant="caption">{props.location}</Typography>
              </div>
              <div className={classes.container}>
                <FontAwesomeIcon icon={faUserCircle} className={classes.icon} />
                <Typography variant="caption">{props.trader}</Typography>
              </div>
            </div>
            <div className={classes.rightTextContainer}>
              <div className={classes.rightText}>
                <Typography variant="h4">{props.priceCurrent}</Typography>
              </div>
              <div className={classes.rightText}>
                <Typography variant="body2">{props.priceChange}</Typography>
              </div>
              <div className={classes.rightText}>
                <Typography variant="body2">{props.percentChange}</Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
