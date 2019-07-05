import React from 'react'
import { makeStyles, Paper, Typography, Switch } from '@franklin-thor/core/'
import FTICard from '../FTICard/FTICard'

const useStyles = makeStyles(theme => ({
  container: {
    flexBasis: '25%',
  },
  root: {
    display: 'flex',
    height: '100%',
    alignItems: 'stretch',
  },
}))

export default function FTIKanBanColumn(props) {
  const classes = useStyles()
  const type = props.type

  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Paper>
          <Typography variant="body2">Desk Orders</Typography>
          <Switch defaultChecked value="checkedF" color="default" />
          <Typography variant="body1">Order Size</Typography>
        </Paper>
        <FTICard
          actNum="01234-56789"
          type="buy"
          traderName="MSFT"
          progress="77"
          current="16,000"
          max="20,000"
          money="300,000"
          orderNum="17608"
          automated="true"
          group="H1H"
          location="WZM"
          trader="DL1"
          priceCurrent="101.82"
          priceChange="+4.15"
          percentChange="4.47%"
        />
      </Paper>
    </div>
  )
}
