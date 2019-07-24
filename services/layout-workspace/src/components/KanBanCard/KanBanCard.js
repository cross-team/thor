import React from 'react'
import { Card, CardContent, Typography, LinearProgress } from '@material-ui/core/'
import { makeStyles } from '@material-ui/styles/'
import AccountIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SwapIcon from '@material-ui/icons/SwapHorizontalCircle'
import GroupIcon from '@material-ui/icons/Group'
import LocationIcon from '@material-ui/icons/LocationCityOutlined'
import TraderIcon from '@material-ui/icons/AccountCircleOutlined'
import Button from '@material-ui/core/Button'

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
    minWidth: '256px',
    margin: '8px',
    backgroundColor: '#262524',
    //border: 'solid 1px black',
    //borderRadius: '4px',
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

export default function KanBanCard(props) {
  const classes = useStyles()

  return (
    <div
      draggable={true}
      onDragEnd={e => {
        props.onDragEnd(e, props.order)
      }}
    >
      <Card className={classes.cardContainer}>
        <CardContent className={classes.leftContent}>
          <div className={classes.container}>
            <AccountIcon className={classes.icon} />
            <Typography variant="caption">{props.order.actNum}</Typography>
          </div>
          <div className={classes.container}>
            {/*<FTIBadge type={props.order.type} className={classes.icon} />*/}
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
              <AccountIcon className={classes.icon} />
              <Typography variant="caption">{props.order.orderNum}</Typography>
            </div>
            {props.order.automated ? <SwapIcon /> : <div></div>}
          </div>
          <div className={classes.rightContainer}>
            <div>
              <div className={classes.container}>
                <GroupIcon className={classes.icon} />
                <Typography variant="caption">{props.order.group}</Typography>
              </div>
              <div className={classes.container}>
                <LocationIcon className={classes.icon} />
                <Typography variant="caption">{props.order.location}</Typography>
              </div>
              <div className={classes.container}>
                <TraderIcon className={classes.icon} />
                <Typography variant="caption">{props.order.trader}</Typography>
              </div>
            </div>
            <div>
              <Typography variant="h4">{props.order.priceCurrent}</Typography>
              <Typography variant="body2">{props.order.priceChange}</Typography>
              <Typography variant="body2">{props.order.percentChange}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    /*
    <div
      draggable={true}
      onDragEnd={e => {
        props.onDragEnd(e, props.order)
      }}
    >
      <Card className={classes.cardContainer}>
        <CardContent className={classes.leftContent}>
          <div className={classes.container}>
            <AccountIcon className={classes.icon} />
            <Typography variant="caption">{props.order.actNum}</Typography>
          </div>
          <div className={classes.container}>
            <FTIBadge type={props.order.type} className={classes.icon} />
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
              <AccountIcon className={classes.icon} />
              <Typography variant="caption">{props.order.orderNum}</Typography>
            </div>
            {props.order.automated ? <SwapIcon /> : <div></div>}
          </div>
          <div className={classes.rightContainer}>
            <div>
              <div className={classes.container}>
                <GroupIcon className={classes.icon} />
                <Typography variant="caption">{props.order.group}</Typography>
              </div>
              <div className={classes.container}>
                <LocationIcon className={classes.icon} />
                <Typography variant="caption">{props.order.location}</Typography>
              </div>
              <div className={classes.container}>
                <TraderIcon className={classes.icon} />
                <Typography variant="caption">{props.order.trader}</Typography>
              </div>
            </div>
            <div>
              <Typography variant="h4">{props.order.priceCurrent}</Typography>
              <Typography variant="body2">{props.order.priceChange}</Typography>
              <Typography variant="body2">{props.order.percentChange}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    */
  )
}
