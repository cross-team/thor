import React, { useEffect } from 'react'
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
import PropTypes from 'prop-types'

const useStyles = makeStyles({
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
})

export default function FTIKanBanColumn(props) {
  const [state, setState] = React.useState({
    mouseIsHovering: false,
  })
  const [values, setValues] = React.useState({
    order: 'size',
  })

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  const classes = useStyles()

  useEffect(() => {
    setState({ ...state, mouseIsHovering: false })
  }, [props])

  const generateKanbanCards = () => {
    console.log('***********', props.orders)
    return props.orders.slice(0).map(order => {
      return <FTICard order={order} key={order.orderNum} onDragEnd={props.onDragEnd} />
    })
  }

  return (
    <div
      className={classes.root}
      onDragEnter={e => {
        setState({ ...state, mouseIsHovering: true })
        props.onDragEnter(e, props.stage)
      }}
      onDragExit={e => {
        setState({ ...state, mouseIsHovering: true })
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
