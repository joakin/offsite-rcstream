import React from 'react'
import './Speedometer.less'

export default React.createClass({
  render: function () {
    var speedClass
    var units = this.props.units || 'edits/second'
    var speed = this.props.speed.toFixed(2)

    if (speed < 1) {
      speedClass = 'slow'
    } else if (speed > 3) {
      speedClass = 'rampant'
    } else {
      speedClass = 'steady'
    }
    return (
    <div className={'Speedometer ' + speedClass}>
        <span className="value">{speed}</span>
        <span className="units">{units}</span>
      </div>
    )
  }
})
