import React from 'react'
import EditList from './edit-list'

export default React.createClass({
  render: function() {
    return (
      <div className="App">
        <EditList edits={this.props.edits}></EditList>
      </div>
    )
  }
})
