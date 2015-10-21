import React from 'react'

export default React.createClass({
  render: function() {
    let {title, comment, wiki, bot} = this.props.edit
    return (
      <div class='Edit'>
        <h3>{title}</h3>
        <p>{wiki}: {comment}</p>
      </div>
    )
  }
})
