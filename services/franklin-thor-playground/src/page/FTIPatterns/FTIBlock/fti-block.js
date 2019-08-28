import React from 'react'
import { Paper, Typography, LinearProgress, Avatar } from '@cross.team/core'
import { FontAwesomeIcon, faLayerGroup } from '@cross.team/icons'
import useStyles from './fti-block-styles'

export default function FTIBlock() {
  const styleProps = { progressType: true }
  const classes = useStyles(styleProps)

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentContainer}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon className={classes.fontAwesome} icon={faLayerGroup} />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.topContainer}>
            <div className={classes.brokerContainer}>
              <div>
                <Typography className={classes.darkFont} variant={'caption'}>
                  {`${'LT2'}`}
                </Typography>
                <Typography>{`${'MDR'}`}</Typography>
                <Typography className={classes.darkFont} variant={'caption'}>
                  {`${'CA INVESTMENT SERVICES'}`}
                </Typography>
              </div>
            </div>
            <div className={classes.orderDetails}>
              <div className={classes.priceAndAvg}>
                <Typography variant={'caption'}>{`${'USD'} ${'$4.4'}`}</Typography>
                <Typography className={classes.changeColor} variant={'caption'}>
                  {styleProps.progressType && '-'}
                  {`${'3.8%'}`}
                </Typography>
                <Typography variant={'caption'}>
                  <span className={classes.darkFont}>{`${'AVG '}`}</span>
                  {`${'7.33'}`}
                </Typography>
              </div>
              <div className={classes.statusInfo}>
                <Typography variant={'caption'}>{`${'PARTIALLY FILLED'}`}</Typography>
                <div className={classes.progressContainer}>
                  <Avatar className={classes.avatar} color={'primary'}>{`${'S'}`}</Avatar>
                  <LinearProgress className={classes.progress} variant={'determinate'} value={50} />
                </div>
                <Typography className={classes.darkFont} variant={'caption'}>
                  {`${'2,421'} OF ${'4,000'}`}
                </Typography>
              </div>
            </div>
          </div>
          <hr className={classes.divider} />
          <div className={classes.bottomContainer}>
            <Typography variant={'caption'}>{`${'USD'} ${'$1,987,090'}`}</Typography>
            <div className={classes.darkFont}>
              <Typography variant={'caption'}>
                {`${'# ORDERS'}`}
                <span className={classes.lightFont}>{`${' 20'}`}</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

FTIBlock.propTypes = {}
