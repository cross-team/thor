import React from 'react'
import { Paper, Typography } from '@cross.team/core'
import { FontAwesomeIcon, faLayerGroup } from '@cross.team/icons'
import useStyles from './fti-block-styles'

export default function FTIBlock() {
  const classes = useStyles()
  return (
    // props.type will contain a value of either 'buy' or 'sell'
    <Paper className={classes.paper}>
      <div className={classes.contentContainer}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.brokerContainer}>
            <div>
              <Typography variant={'caption'}>LT2</Typography>
              <Typography>MDR</Typography>
              <Typography variant={'caption'}>CA INVESTMENT SERVICES</Typography>
            </div>
          </div>
          <div>
            {/* <div className={classes.percentChange}> */}
            {/*  <div className={false ? classes.upArrow : classes.downArrow}/> */}
            {/*  <Typography variant={'caption'}>3.8%</Typography> */}
            {/* </div> */}
          </div>
          <div></div>
          <hr className={classes.divider} />
          <div className={classes.bottomContainer}>
            <div>
              <Typography className={classes.currencyType} variant={'caption'}>
                USD
              </Typography>
              <Typography variant={'caption'}>$1,987,090</Typography>
            </div>
            <div>
              <div className={classes.orderNumber}>
                <Typography variant={'caption'} className={classes.orderText}>
                  # ORDERS
                </Typography>
                <Typography variant={'caption'} color={'inherit'}>
                  20
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

FTIBlock.propTypes = {}
