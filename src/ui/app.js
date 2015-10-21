import React from 'react'
import Edit from './edit'

export default React.createClass({
  render: function() {
    var edits = this.props.edits.reverse().map((e) => <Edit edit={e} />)
    return (
      <div>{edits}</div>
    )
  }
})
