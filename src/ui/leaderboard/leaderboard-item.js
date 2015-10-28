import React from 'react'
import utils from './../../libs/wiki-utils'

export default React.createClass({
  render: function() {
    var item = this.props.item;
    var url = utils.getUrl( item.title, item.wiki );

    return (
      <li className="LeaderboardItem">
        <h3><a href={url}>{item.title}</a></h3>
        <p>{item.edits} edits</p>
      </li>
    )
  }
})
