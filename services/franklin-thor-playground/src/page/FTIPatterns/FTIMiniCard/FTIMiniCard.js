import React from 'react'
import {
  makeStyles,
  Paper,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Avatar,
  Checkbox,
} from '@franklin-thor/core/'
import {} from '@franklin-thor/icons'
import PropTypes from 'prop-types'
import useStyles from './FTIMiniCard-styles'

export default function FTIMiniCard(props) {
  const [checked, setChecked] = React.useState(false)
  const styleProps = {
    progressType: true,
    checked,
  }
  const classes = useStyles(styleProps)

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
      <Paper className={classes.cardContainer}>
        <div className={classes.content}>
          <div className={classes.leftContent}>
            <Checkbox color="default" value={checked} onChange={handleChange} />
            <div className={classes.leftText}>
              <Typography className={classes.identifier}>IDENTIFIER</Typography>
              <Typography className={classes.data}>DATA-SM</Typography>
            </div>
          </div>
          <div className={classes.rightContent}>
            <div className={classes.priceAndAvg}>
              <Typography className={classes.data}>{`${'USD'} ${'$4.4'}`}</Typography>
              <Typography className={classes.data}>
                {styleProps.progressType && '-'}
                {`${'3.8%'}`}
              </Typography>
              <Typography className={classes.data}>
                <span className={classes.label}>{`${'AVG '}`}</span>
                {`${'7.33'}`}
              </Typography>
            </div>
            <div className={classes.statusInfo}>
              <Typography className={classes.label}>{`${'PARTIALLY FILLED'}`}</Typography>
              <div className={classes.progressContainer}>
                <Avatar className={classes.avatar} color={'primary'}>{`${'S'}`}</Avatar>
                <LinearProgress className={classes.progress} variant={'determinate'} value={50} />
              </div>
              <Typography className={classes.data}>{`${'2,421'} OF ${'4,000'}`}</Typography>
            </div>
          </div>
        </div>
      </Paper>
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
