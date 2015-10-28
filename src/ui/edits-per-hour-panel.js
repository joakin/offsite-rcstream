import React from 'react'
import Speedometer from './speedometer'

export default React.createClass({
  render: function() {
    var speedometers = [];
    for ( var i = 0; i < this.props.titles.length; i++ ) {
      var title = this.props.titles[i];
      var numEdits = this.props.nsTitles[title] || 0;
      var timeElapsed = ( new Date() - this.props.startTime ) / 1000 / 60 / 60;
      var speed = numEdits === 0 ? 0 : numEdits / timeElapsed;
			if ( speed === NaN ) {
				console.log(numEdits, timeElapsed);
			}
      speedometers.push(
        <Speedometer speed={speed}
          units={"edits to " + title + "/hour"}></Speedometer>
      )
    }
    return (
      <div className="EditsPerHourPanel">
        {speedometers}
      </div>
    )
  }
})
