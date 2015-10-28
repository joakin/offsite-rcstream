import React from 'react'
import SpeedometerWithLogo from './speedometer-with-logo'

export default React.createClass({
  render: function() {
    var speedometers = [];
    this.props.speed.forEach((speed, wiki) => {
      speedometers.push(<SpeedometerWithLogo wiki={wiki} speed={speed} key={wiki}/>)
    })
    return (
      <div className="SpeedCheckPanel Panel">{speedometers}</div>
    )
  }
})
