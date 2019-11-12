import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, LinearProgress, Avatar } from '@cross.team/core'
import { FontAwesomeIcon, faTicket } from '@cross.team/icons'
import useStyles from './mini-card-styles'
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
  const progress = Math.floor((placed / fulfilled) * 100)
  const progressPosition = progress * (9 / 10)

  const styleProps = { progressType: buy, progressPosition }
  const classes = useStyles(styleProps)

  const numberWithCommas = x => {
    if (x === null) {
      return '0'
    }
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
    percentChange: PropTypes.number,
    placed: PropTypes.number,
    price: PropTypes.number,
    status: PropTypes.string,
    symbol: PropTypes.string,
    trader: PropTypes.string,
  }),
}
