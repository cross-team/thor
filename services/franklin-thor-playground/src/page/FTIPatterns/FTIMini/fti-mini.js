import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, LinearProgress, Avatar } from '@cross.team/core'
import { FontAwesomeIcon, faTicket } from '@cross.team/icons'
import useStyles from './fti-mini-styles'
import currencyCodes from './currency-codes'

export default function FTIMini({ miniCardData }) {
  const {
    average,
    buy,
    currencyCode,
    companyName,
    fulfilled,
    percentChange,
    placed,
    price,
    status,
    symbol,
    trader,
  } = miniCardData

  const styleProps = { progressType: buy }
  const classes = useStyles(styleProps)

  const numberWithCommas = x => {
    const parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentContainer}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon className={classes.fontAwesome} icon={faTicket} />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.topContainer}>
            <div className={classes.brokerContainer}>
              <div>
                <Typography className={classes.darkFont} variant={'caption'}>
                  {trader}
                </Typography>
                <Typography>{symbol}</Typography>
                <Typography className={classes.darkFont} variant={'caption'}>
                  {companyName}
                </Typography>
              </div>
            </div>
            <div className={classes.orderDetails}>
              <div className={classes.priceAndAvg}>
                <Typography
                  variant={'caption'}
                >{`${currencyCode} ${currencyCodes[currencyCode]}${price}`}</Typography>
                <Typography className={classes.changeColor} variant={'caption'}>
                  {!styleProps.progressType && '-'}
                  {`${percentChange}%`}
                </Typography>
                <Typography variant={'caption'}>
                  <span className={classes.darkFont}>{`${'AVG '}`}</span>
                  {average}
                </Typography>
              </div>
              <div className={classes.statusInfo}>
                <Typography variant={'caption'}>{status}</Typography>
                <div className={classes.progressContainer}>
                  <Avatar className={classes.avatar} color={'primary'}>
                    {buy ? 'B' : 'S'}
                  </Avatar>
                  <LinearProgress
                    className={classes.progress}
                    variant={'determinate'}
                    value={Math.floor((placed / fulfilled) * 100)}
                  />
                </div>
                <Typography className={classes.darkFont} variant={'caption'}>
                  {`${numberWithCommas(placed)} OF ${numberWithCommas(fulfilled)}`}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

FTIMini.propTypes = {
  miniCardData: PropTypes.shape({
    average: PropTypes.number,
    broker: PropTypes.string,
    buy: PropTypes.bool,
    companyName: PropTypes.string,
    currencyCode: PropTypes.string,
    fulfilled: PropTypes.number,
    orders: PropTypes.string,
    percentChange: PropTypes.number,
    placed: PropTypes.number,
    price: PropTypes.number,
    status: PropTypes.string,
    symbol: PropTypes.string,
    totalAmount: PropTypes.number,
    trader: PropTypes.string,
  }),
}
