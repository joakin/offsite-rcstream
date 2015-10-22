import React from 'react'
import EditList from './edit-list'

export default React.createClass({
  render: function() {
    return (
      <div>
        <EditList edits={this.props.edits}></EditList>
      </div>
    )
  }
})
