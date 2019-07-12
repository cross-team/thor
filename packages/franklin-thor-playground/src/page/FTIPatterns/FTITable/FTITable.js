import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from 'material-table'

const useStyles = makeStyles(theme => ({
  root: {},
}))

export default function FTITable(props) {
  const classes = useStyles()

  return (
    <div>
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
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          options={{
            selection: true,
          }}
        />
      </div>
    </div>
  )
}
