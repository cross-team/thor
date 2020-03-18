import React, { useEffect } from 'react'
import FTICard from '../FTICard'
import {
  makeStyles,
  Paper,
  Typography,
  Switch,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  container: {
    width: '100%',
    backgroundColor: '#191918',
  },
  root: {
    display: 'flex',
    width: '100%',
    height: '86vh',
    alignItems: 'stretch',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#262524',
    padding: '8px 16px 8px 16px',
  },
})

export default function FTIKanBanColumn(props) {
  const [mouseIsHovering, setMouseIsHovering] = React.useState(false)
  const [orderValue, setOrderValue] = React.useState('size')

  function handleChange(event) {
    setOrderValue(event.target.value)
  }

  const classes = useStyles()

  useEffect(() => {
    setMouseIsHovering(false)
  }, [props])

  const generateKanbanCards = () => {
    return props.orders.slice(0).map(order => {
      return <FTICard order={order} key={order.orderNum} onDragEnd={props.onDragEnd} />
    })
  }

  return (
    <div
      className={classes.root}
      onDragEnter={e => {
        setMouseIsHovering(true)
        props.onDragEnter(e, props.stage)
      }}
      onDragExit={e => {
        setMouseIsHovering(true)
      }}
    >
      <div className={classes.container}>
        <Paper className={classes.header}>
          <div className={classes.topContainer}>
            <Typography variant="body2">{props.name}</Typography>
            <Switch defaultChecked value="checkedF" color="default" />
          </div>
          <form>
            <FormControl className={classes.formControl}>
              <Select
                value={orderValue}
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
        {generateKanbanCards()}
      </div>
    </div>
  )
}

FTIKanBanColumn.propTypes = {
  name: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragEnter: PropTypes.func,
  orders: PropTypes.array,
  stage: PropTypes.number,
}
