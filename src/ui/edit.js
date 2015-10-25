import React from 'react'
import Logo from './logo'
import EditSummary from './edit-summary'

export default React.createClass({
  render: function() {
    let {title, comment, wiki, bot} = this.props.edit
    return (
      <div className='Edit'>
        <Logo wiki={wiki}></Logo>
        <EditSummary title={title} comment={comment}></EditSummary>
      </div>
    )
  }
})
