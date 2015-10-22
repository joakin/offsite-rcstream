import React from 'react'
import EditList from './edit-list'
import SpeedCheckPanel from './speed-check-panel'

export default React.createClass({
  render: function() {
    return (
      <div className="App">
        <EditList edits={this.props.edits}></EditList>
        <SpeedCheckPanel speed={this.props.speed}></SpeedCheckPanel>
      </div>
    )
  }
})
