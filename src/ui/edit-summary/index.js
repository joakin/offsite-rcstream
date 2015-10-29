import React from 'react'
import './EditSummary.less'

export default React.createClass({
  render: function () {
    return (
    <div className="EditSummary">
        <h3>{this.props.title}</h3>
        <p>{this.props.comment}</p>
      </div>
    )
  }
})
