import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import AccountIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SwapIcon from '@material-ui/icons/SwapHorizontalCircle'
import GroupIcon from '@material-ui/icons/Group'
import LocationIcon from '@material-ui/icons/LocationCityOutlined'
import TraderIcon from '@material-ui/icons/AccountCircleOutlined'
import FTIBadge from '../FTIBadge/index'

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
            <AccountIcon className={classes.icon} />
            <Typography variant="caption">{props.actNum}</Typography>
          </div>
          <div className={classes.container}>
            <FTIBadge type={props.type} className={classes.icon} />
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
              <AccountIcon className={classes.icon} />
              <Typography variant="caption">{props.orderNum}</Typography>
            </div>
            {props.automated ? <SwapIcon /> : <div></div>}
          </div>
          <div className={classes.rightContainer}>
            <div>
              <div className={classes.container}>
                <GroupIcon className={classes.icon} />
                <Typography variant="caption">{props.group}</Typography>
              </div>
              <div className={classes.container}>
                <LocationIcon className={classes.icon} />
                <Typography variant="caption">{props.location}</Typography>
              </div>
              <div className={classes.container}>
                <TraderIcon className={classes.icon} />
                <Typography variant="caption">{props.trader}</Typography>
              </div>
            </div>
            <div>
              <Typography variant="h4">{props.priceCurrent}</Typography>
              <Typography variant="body2">{props.priceChange}</Typography>
              <Typography variant="body2">{props.percentChange}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
