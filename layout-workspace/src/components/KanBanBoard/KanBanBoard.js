import React, { Component } from 'react'
import KanBanColumn from '../KanBanColumn/KanBanColumn'
import projectList from '../../assets/projectList'

class KanbanBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      projects: [],
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
    this.setState({ projects: projectList, isLoading: false })
  }

  //this is called when a Kanban card is dragged over a column (called by column)
  handleOnDragEnter(e, stageValue) {
    this.setState({ draggedOverCol: stageValue })
  }

  //this is called when a Kanban card dropped over a column (called by card)
  handleOnDragEnd(e, project) {
    const updatedProjects = this.state.projects.slice(0)
    updatedProjects.find(projectObject => {
      return projectObject.name === project.name
    }).project_stage = this.state.draggedOverCol
    this.setState({ projects: updatedProjects })
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
              projects={this.state.projects.filter(project => {
                return parseInt(project.project_stage, 10) === column.stage
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
