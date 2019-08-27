import React from 'react'
import { Paper, Typography, LinearProgress, Avatar } from '@cross.team/core'
import { FontAwesomeIcon, faLayerGroup } from '@cross.team/icons'
import useStyles from './fti-block-styles'

export default function FTIBlock() {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <div className={classes.contentContainer}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.topContainer}>
            <div className={classes.brokerContainer}>
              <div>
                <Typography variant={'caption'}>LT2</Typography>
                <Typography>MDR</Typography>
                <Typography variant={'caption'}>CA INVESTMENT SERVICES</Typography>
              </div>
            </div>
            <div className={classes.priceAndAvg}>
              <div>
                <Typography variant={'caption'}>{`${'USD'} ${'$4.4'}`}</Typography>
              </div>
              <div className={classes.percentChange}>
                <div className={false ? classes.upArrow : classes.downArrow} />
                <Typography variant={'caption'}>3.8%</Typography>
              </div>
              <div>
                <Typography variant={'caption'}>{`${'AVG'} ${'7.33'}`}</Typography>
              </div>
            </div>
            <div className={classes.statusInfo}>
              <div>
                <Typography variant={'caption'}>PARTIALLY FILLED</Typography>
              </div>
              <div className={classes.progressContainer}>
                <Avatar className={classes.avatar} color={'primary'}>
                  S
                </Avatar>
                <LinearProgress
                  className={classes.progress}
                  color={'inherit'}
                  variant={'determinate'}
                  value={50}
                />
              </div>
              <div>
                <Typography variant={'caption'}>{`${'2,421'} OF ${'4,000'}`}</Typography>
              </div>
            </div>
          </div>
          <hr className={classes.divider} />
          <div className={classes.bottomContainer}>
            <div>
              <Typography variant={'caption'}>{`${'USD'} ${'$1,987,090'}`}</Typography>
            </div>
            <div>
              <div className={classes.orderNumber}>
                <Typography variant={'caption'}>
                  {`${'# ORDERS'}`}
                  <span> 20</span>
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
