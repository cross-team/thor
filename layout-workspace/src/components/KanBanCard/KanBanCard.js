import React, { Component } from 'react'
import { makeStyles, Card, CardContent, Typography, LinearProgress } from '@franklin-thor/core/'
import AccountIcon from '@material-ui/icons/InsertDriveFileOutlined'
import SwapIcon from '@material-ui/icons/SwapHorizontalCircle'
import GroupIcon from '@material-ui/icons/Group'
import LocationIcon from '@material-ui/icons/LocationCityOutlined'
import TraderIcon from '@material-ui/icons/AccountCircleOutlined'
import FTIBadge from '@franklin-thor/fti/FTIBadge'

/*
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

const classes = useStyles()
*/

class KanbanCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const icon = {
      width: '12px',
      height: '12px',
    }
    const container = {
      display: 'flex',
      alignItems: 'center',
    }
    const progress = {
      width: '100px',
    }
    const cardContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      // maxWidth: '344px'
    }
    const rightContainer = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
    const leftContent = {
      flexBasis: '50%',
    }
    const rightContent = {
      flexBasis: '50%',
    }

    return (
      <div
        draggable={true}
        onDragEnd={e => {
          this.props.onDragEnd(e, this.props.order)
        }}
      >
        <Card style={cardContainer}>
          <CardContent style={leftContent}>
            <div style={container}>
              <AccountIcon style={icon} />
              <Typography variant="caption">{this.props.order.actNum}</Typography>
            </div>
            <div style={container}>
              <FTIBadge type={this.props.order.type} style={icon} />
              <Typography variant="h4">{this.props.order.traderName}</Typography>
            </div>
            <LinearProgress
              style={progress}
              variant="determinate"
              value={this.props.order.progress}
            />
            <Typography variant="caption">
              {this.props.order.current} OF {this.props.order.max} - {this.props.order.progress}%
            </Typography>
            <br />
            <Typography variant="caption">USD {this.props.order.money}</Typography>
          </CardContent>
          <CardContent style={rightContent}>
            <div style={rightContainer}>
              <div>
                <AccountIcon style={icon} />
                <Typography variant="caption">{this.props.order.orderNum}</Typography>
              </div>
              {this.props.order.automated ? <SwapIcon /> : <div></div>}
            </div>
            <div style={rightContainer}>
              <div>
                <div style={container}>
                  <GroupIcon style={icon} />
                  <Typography variant="caption">{this.props.order.group}</Typography>
                </div>
                <div style={container}>
                  <LocationIcon style={icon} />
                  <Typography variant="caption">{this.props.order.location}</Typography>
                </div>
                <div style={container}>
                  <TraderIcon style={icon} />
                  <Typography variant="caption">{this.props.order.trader}</Typography>
                </div>
              </div>
              <div>
                <Typography variant="h4">{this.props.order.priceCurrent}</Typography>
                <Typography variant="body2">{this.props.order.priceChange}</Typography>
                <Typography variant="body2">{this.props.order.percentChange}</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default KanbanCard
