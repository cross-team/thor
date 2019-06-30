import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

class KanbanCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const cardStyle = {}

    return (
      <div
        style={cardStyle}
        draggable={true}
        onDragEnd={e => {
          this.props.onDragEnd(e, this.props.project)
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.project.name}
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.project.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default KanbanCard
