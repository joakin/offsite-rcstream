import React from 'react'
import LeaderboardItem from './leaderboard-item'
import './Leaderboard.less'

export default React.createClass({
  render: function() {
    var items = [];
    var board = this.props.leaderboard;
    if ( board && board.hasItems() ) {
      items = board.slice(0,10).map((item) => <LeaderboardItem item={item} key={board.id + '-' + item.title + '-' + item.wiki} />)
    }
    return (
      <ol className="Leaderboard">
        {items}
      </ol>
    )
  }
})
