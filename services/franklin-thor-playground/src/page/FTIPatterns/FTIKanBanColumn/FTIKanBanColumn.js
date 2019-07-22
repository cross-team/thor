import React from 'react'
import {
  makeStyles,
  Paper,
  Typography,
  Switch,
  Select,
  FormControl,
  MenuItem,
} from '@franklin-thor/core/'
import FTICard from '../FTICard/FTICard'

const useStyles = makeStyles(theme => ({
  column: {
    flexBasis: '25%',
  },
  root: {
    display: 'flex',
    height: '100%',
    alignItems: 'stretch',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export default function FTIKanBanColumn(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    order: 'size',
  })

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.column}>
        <Paper>
          <div className={classes.topContainer}>
            <Typography variant="body2">Desk Orders</Typography>
            <Switch defaultChecked value="checkedF" color="default" />
          </div>
          <form>
            <FormControl className={classes.formControl}>
              <Select
                value={values.order}
                onChange={handleChange}
                displayEmpty
                name="order"
                className={classes.selectEmpty}
              >
                <MenuItem value={'size'}>Order Size</MenuItem>
                <MenuItem value={'type'}>Order Type</MenuItem>
                <MenuItem value={'status'}>Order Status</MenuItem>
                <MenuItem value={'balance'}>Order Balance</MenuItem>
                <MenuItem value={'company'}>Company</MenuItem>
                <MenuItem value={'name'}>Trader Name</MenuItem>
                <MenuItem value={'location'}>Trader Location</MenuItem>
                <MenuItem value={'last'}>Last Price</MenuItem>
                <MenuItem value={'close'}>Close Price</MenuItem>
                <MenuItem value={'avg'}>Average Price</MenuItem>
                <MenuItem value={'volume'}>% Volume</MenuItem>
                <MenuItem value={'complete'}>% Complete</MenuItem>
                <MenuItem value={'tca'}>TCA</MenuItem>
              </Select>
            </FormControl>
          </form>
        </Paper>
        <FTICard
          actNum="01234-56789"
          type="buy"
          traderName="MSFT"
          progress="77"
          current="16,000"
          max="20,000"
          money="300,000"
          orderNum="17608"
          automated="true"
          group="H1H"
          location="WZM"
          trader="DL1"
          priceCurrent="101.82"
          priceChange="+4.15"
          percentChange="4.47%"
        />
      </Paper>
    </div>
  )
}
