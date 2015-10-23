import React from 'react'
import utils from './../libs/wiki-utils'

export default React.createClass({
  render: function() {
    var item = this.props.item;
    var url = utils.getUrl( item.title, item.wiki );

    return (
      <li className="LeaderboardItem">
        <h2><a href={url}>{item.title}</a></h2>
        <p>{item.edits} edits</p>
      </li>
    )
  }
})
