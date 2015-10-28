import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div className="Panel">
        <h2 className="title">{this.props.title}</h2>
        {this.props.contents}
      </div>
    )
  }
})
