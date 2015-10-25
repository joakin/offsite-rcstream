import React from 'react'
import Logo from './logo'
import Speedometer from './speedometer'

export default React.createClass({
  render: function() {
    return (
      <div className="SpeedometerWithLogo">
        <Logo wiki={this.props.wiki}></Logo>
        <Speedometer speed={this.props.speed}></Speedometer>
      </div>
    )
  }
})
