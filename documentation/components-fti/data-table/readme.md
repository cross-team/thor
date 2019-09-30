# Data Table

## Material-Table

The data table within the FTITable component on story book is built using material-table.

To create it, you add various props to the MaterialTable component containing objects that provide the component with the information it needs to render the table and its appropriate rows and columns with their appropriate data. There is a columns prop where you specify the various column fields there's a data prop that contains an object for each row of the table containing their data points, and there's an option prop where you can set any additional options for the table. Below is an example of what is already in the FTITable.

You can find additional documention on material-table's features here: https://material-table.com/#/
```
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
        data={[{
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
          pm: 'PM Templeton'
        }]}
        options={{
          selection: true,
        }}
      />
    ```
