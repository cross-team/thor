import React, { Component } from 'react'
import KanBanColumn from '../KanBanColumn/KanBanColumn'
import orderList from '../../assets/orderList'

class KanbanBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      orders: [],
      draggedOverCol: 0,
    }

    this.handleOnDragEnter = this.handleOnDragEnter.bind(this)
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this)
    this.columns = [
      { name: 'Desk Orders', stage: 1 },
      { name: 'My Placements', stage: 2 },
      { name: 'Executions', stage: 3 },
      { name: 'Ready To Allocate', stage: 4 },
    ]
  }

  componentDidMount() {
    this.setState({ orders: orderList, isLoading: false })
  }

  //this is called when a Kanban card is dragged over a column (called by column)
  handleOnDragEnter(e, stageValue) {
    this.setState({ draggedOverCol: stageValue })
  }

  //this is called when a Kanban card dropped over a column (called by card)
  handleOnDragEnd(e, order) {
    const updatedOrders = this.state.orders.slice(0)
    updatedOrders.find(orderObject => {
      return orderObject.orderNum === order.orderNum
    }).order_stage = this.state.draggedOverCol
    this.setState({ orders: updatedOrders })
  }

  render() {
    if (this.state.isLoading) {
      return <h3>Loading...</h3>
    }

    const boardStyle = {
      display: 'flex',
      width: '100%',
    }

    return (
      <div style={boardStyle}>
        {this.columns.map(column => {
          return (
            <KanBanColumn
              name={column.name}
              stage={column.stage}
              orders={this.state.orders.filter(order => {
                return parseInt(order.order_stage, 10) === column.stage
              })}
              onDragEnter={this.handleOnDragEnter}
              onDragEnd={this.handleOnDragEnd}
              key={column.stage}
            />
          )
        })}
      </div>
    )
  }
}

export default KanbanBoard
