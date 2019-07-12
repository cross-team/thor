import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from 'material-table'

const useStyles = makeStyles(theme => ({
  root: {},
}))

export default function FTITable(props) {
  const classes = useStyles()

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Type', field: 'type' },
          { title: 'Status', field: 'status' },
          { title: 'Company', field: 'company' },
          { title: 'Trader Name Location', field: 'trader' },
          { title: 'Last Price Close Price', field: 'LCPrice' },
          { title: 'Avg Price', field: 'avgPrice' },
          { title: '% Volume', field: 'volume' },
          { title: 'Order Balance', field: 'balance' },
          { title: '% Complete', field: 'complete' },
          { title: 'TCA: R-BPS', field: 'tcaR' },
          { title: 'TCA: U-BPS', field: 'tcaU' },
          { title: 'Manager Limit', field: 'limit' },
          { title: 'Broker Name Manager Name', field: 'broker' },
          { title: 'PM Group & Comment', field: 'pm' },
        ]}
        data={[
          {
            type: 'Buy',
            status: 'Open',
            company: 'MSFT-OX',
            trader: 'Justin Chasko JCH - FTL',
            LCPrice: 101.82,
            avgPrice: 101.82,
            volume: '0.003%',
            balance: '16,000 of 20,000',
            complete: '10.0%',
            tcaR: -55,
            tcaU: 273,
            limit: 'MKT',
            broker: 'Broker Name Manager Name',
            pm: 'PM Templeton',
          },
          {
            type: 'Sell',
            status: 'Open',
            company: 'MSFT-OX',
            trader: 'Justin Chasko JCH - FTL',
            LCPrice: 101.82,
            avgPrice: 101.82,
            volume: '0.003%',
            balance: '16,000 of 20,000',
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
