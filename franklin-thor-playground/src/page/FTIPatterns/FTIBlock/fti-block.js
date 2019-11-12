import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, LinearProgress, Avatar } from '@cross.team/core'
import { FontAwesomeIcon, faLayerGroup } from '@cross.team/icons'
import useStyles from './fti-block-styles'
import currencyCodes from './currency-codes'

export default function FTIBlock({ blockCardData }) {
  const {
    average,
    broker,
    buy,
    currencyCode,
    companyName,
    fulfilled,
    orders,
    percentChange,
    placed,
    price,
    status,
    symbol,
    totalAmount,
    trader,
  } = blockCardData

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
          <FontAwesomeIcon className={classes.fontAwesome} icon={faLayerGroup} />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.topContainer}>
            <div className={classes.brokerContainer}>
              <Typography className={`${classes.darkFont} ${classes.caption}`} variant={'caption'}>
                {trader}
              </Typography>
              <Typography className={classes.identifier}>{symbol}</Typography>
              <Typography variant={'caption'}>
                <span className={classes.companyText}>{companyName}</span>
              </Typography>
            </div>
            <div className={classes.orderDetails}>
              <div className={classes.priceAndAvg}>
                <Typography
                  className={classes.caption}
                  noWrap
                >{`${currencyCode} ${currencyCodes[currencyCode]}${price}`}</Typography>
                <Typography
                  className={`${classes.changeColor} ${classes.caption}`}
                  variant={'caption'}
                >
                  {`${percentChange}%`}
                </Typography>
                <Typography className={classes.caption}>
                  <span className={classes.darkFont}>{`${'AVG '}`}</span>
                  {average}
                </Typography>
              </div>
              <div className={classes.statusInfo}>
                <Typography className={classes.caption} noWrap>
                  {status}
                </Typography>
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
                <Typography
                  className={`${classes.darkFont} ${classes.caption}`}
                  variant={'caption'}
                >
                  {`${numberWithCommas(placed)} OF ${numberWithCommas(fulfilled)}`}
                </Typography>
              </div>
            </div>
          </div>
          <hr className={classes.divider} />
          <div className={classes.bottomContainer}>
            <Typography className={classes.caption}>{broker}</Typography>
            <div className={classes.darkFont}>
              <div className={classes.orderContainer}>
                <Typography className={classes.caption}>
                  {`${'# ORDERS'}`}
                  <span className={classes.lightFont}>{` ${orders}`}</span>
                </Typography>
                <Typography
                  className={`${classes.topMargin} ${classes.lightFont} ${classes.caption}`}
                >
                  {`${currencyCode} ${currencyCodes[currencyCode]}${numberWithCommas(totalAmount)}`}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

FTIBlock.propTypes = {
  blockCardData: PropTypes.shape({
    average: PropTypes.number,
    broker: PropTypes.string,
    buy: PropTypes.bool,
    companyName: PropTypes.string,
    currencyCode: PropTypes.string,
    fulfilled: PropTypes.number,
    orders: PropTypes.number,
    percentChange: PropTypes.number,
    placed: PropTypes.number,
    price: PropTypes.number,
    status: PropTypes.string,
    symbol: PropTypes.string,
    totalAmount: PropTypes.number,
    trader: PropTypes.string,
  }),
}
