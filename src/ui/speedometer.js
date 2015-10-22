import React from 'react'

export default React.createClass({
  render: function() {
    var speedClass;
    var speed = this.props.speed.toFixed(2);

    if ( speed < 1 ) {
      speedClass = 'slow'
    } else if ( speed > 3 ) {
      speedClass = 'rampant'
    } else {
      speedClass = 'steady'
    }
    return (
      <div className={"Speedometer " + speedClass}>
        <span className="value">{speed}</span>
        <span className="units">edits/second</span>
      </div>
    )
  }
})
