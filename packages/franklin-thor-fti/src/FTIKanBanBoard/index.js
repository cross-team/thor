import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FTIKanBanColumn from '../FTIKanBanColumn'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  boardStyle: {
    display: 'flex',
    width: '100%',
  },
}))

export default function FTIKanBanBoard(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [draggedOverCol, setDraggedOverCol] = useState(0)
  const classes = useStyles()

  const columns = [
    { name: 'Desk Orders', stage: 1 },
    { name: 'My Placements', stage: 2 },
    { name: 'Executions', stage: 3 },
    { name: 'Ready To Allocate', stage: 4 },
  ]

  useEffect(() => {
    setOrders(props.data)
    setIsLoading(false)
  }, [])

  // this is called when a Kanban card is dragged over a column (called by column)
  const handleOnDragEnter = (e, stageValue) => {
    setDraggedOverCol(stageValue)
  }

  // this is called when a Kanban card dropped over a column (called by card)
  const handleOnDragEnd = (e, order) => {
    const updatedOrders = orders.slice(0)
    updatedOrders.find(orderObject => {
      return orderObject.orderNum === order.orderNum
    }).order_stage = draggedOverCol
    setOrders(updatedOrders)
  }

  return (
    <div className={classes.boardStyle}>
      {columns.map(column => {
        return (
          <FTIKanBanColumn
            name={column.name}
            stage={column.stage}
            orders={orders.filter(order => {
              return parseInt(order.order_stage, 10) === column.stage
            })}
            onDragEnter={handleOnDragEnter}
            onDragEnd={handleOnDragEnd}
            key={column.stage}
          />
        )
      })}
    </div>
  )
}

FTIKanBanBoard.propTypes = {
  data: PropTypes.object,
}
