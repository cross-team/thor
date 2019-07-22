import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from 'material-table'
import { Typography, IconButton } from '@franklin-thor/core/build'
import { FontAwesomeIcon, faCommentAltLines } from '@franklin-thor/icons'
import FTIBadge from '../FTIBadge/FTIBadge'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  green: {
    color: '#13BE95',
  },
  red: {
    color: '#DF4444',
  },
})

export default function FTITable() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MaterialTable
        columns={[
          {
            title: 'Type',
            field: 'type',
            render: rowData => (
              <div>
                <FTIBadge type={rowData.type} />
              </div>
            ),
          },
          { title: 'Status', field: 'status' },
          {
            title: 'Company',
            field: 'company',
            render: rowData => (
              <div>
                <Typography variant="h6" className={classes.green}>
                  {rowData.company}
                </Typography>
                <Typography variant="body">Company</Typography>
              </div>
            ),
          },
          { title: 'Trader Name Location', field: 'trader' },
          {
            title: 'Last Price Close Price',
            field: 'LCPrice',
            render: rowData => (
              <div>
                <Typography variant="h6" className={classes.green}>
                  {rowData.LCPrice[0]}
                </Typography>
                <Typography variant="body" className={classes.green}>
                  {rowData.LCPrice[1]}
                </Typography>
              </div>
            ),
          },
          {
            title: 'Avg Price',
            field: 'avgPrice',
            cellStyle: {
              color: '#13BE95',
            },
          },
          { title: '% Volume', field: 'volume' },
          {
            title: 'Order Balance',
            field: 'balance',
            render: rowData => (
              <div>
                <Typography variant="h6">
                  {new Intl.NumberFormat('en-IN', { style: 'decimal' }).format(rowData.balance[0])}
                </Typography>
                <Typography variant="overline">
                  OF{' '}
                  {new Intl.NumberFormat('en-IN', { style: 'decimal' }).format(rowData.balance[1])}
                </Typography>
              </div>
            ),
          },
          { title: '% Complete', field: 'complete' },
          {
            title: 'TCA: R-BPS',
            field: 'tcaR',
            cellStyle: {
              color: '#13BE95',
            },
          },
          {
            title: 'TCA: U-BPS',
            field: 'tcaU',
            cellStyle: {
              color: '#13BE95',
            },
          },
          { title: 'Manager Limit', field: 'limit' },
          { title: 'Broker Name Manager Name', field: 'broker' },
          {
            title: 'PM Group & Comment',
            field: 'pm',
            render: rowData => (
              <div className={classes.container}>
                <Typography variant="body">{rowData.pm}</Typography>
                <IconButton aria-label="Delete" className={classes.margin}>
                  <FontAwesomeIcon icon={faCommentAltLines} className={classes.icon} />
                </IconButton>
              </div>
            ),
          },
        ]}
        data={[
          {
            type: 'buy',
            status: 'Open',
            company: 'MSFT-OX',
            trader: 'Justin Chasko JCH - FTL',
            LCPrice: [101.82, 101.82],
            avgPrice: 101.82,
            volume: '0.003%',
            balance: [16000, 20000],
            complete: '10.0%',
            tcaR: -55,
            tcaU: 273,
            limit: 'MKT',
            broker: 'Broker Name Manager Name',
            pm: 'PM Templeton',
          },
          {
            type: 'sell',
            status: 'Open',
            company: 'MSFT-OX',
            trader: 'Justin Chasko JCH - FTL',
            LCPrice: [101.82, 101.82],
            avgPrice: 101.82,
            volume: '0.003%',
            balance: [16000, 20000],
            complete: '10.0%',
            tcaR: -55,
            tcaU: 273,
            limit: 'MKT',
            broker: 'Broker Name Manager Name',
            pm: 'PM Templeton',
          },
        ]}
        options={{
          selection: true,
        }}
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>
  )
}
