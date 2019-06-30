import React, { Component } from 'react'
import KanBanCard from '../KanBanCard/KanBanCard'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class KanBanColumn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mouseIsHovering: false }
  }

  componentWillReceiveProps(nextProps) {
    this.state = { mouseIsHovering: false }
  }

  generateKanbanCards() {
    return this.props.projects.slice(0).map(project => {
      return <KanBanCard project={project} key={project.name} onDragEnd={this.props.onDragEnd} />
    })
  }

  render() {
    const columnStyle = {
      width: '25%',
    }
    return (
      <div
        style={columnStyle}
        onDragEnter={e => {
          this.setState({ mouseIsHovering: true })
          this.props.onDragEnter(e, this.props.stage)
        }}
        onDragExit={e => {
          this.setState({ mouseIsHovering: false })
        }}
      >
        <Paper>
          <Typography variant="h5" component="h3">
            {this.props.stage}. {this.props.name} ({this.props.projects.length})
          </Typography>
          {this.generateKanbanCards()}
        </Paper>
      </div>
    )
  }
}

export default KanBanColumn
