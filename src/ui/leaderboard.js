import React from 'react'
import LeaderboardItem from './leaderboard-item'

export default React.createClass({
  render: function() {
    var items = [];
    var board = this.props.leaderboard;
    if ( board.hasItems() ) {
      items = board.slice(0,10).map((item) => <LeaderboardItem item={item} />)
    }
    return (
      <ol className="Leaderboard">
        {items}
      </ol>
    )
  }
})
