import React from 'react'

export default React.createClass({
  render: function() {
    var pc = ( this.props.botScore * 100 ).toFixed( 2 );
    var valueClass = pc < 50 ? 'isHuman value' : 'isMachine value'; 

    return (
      <div className="JudgementDayPanel">
        <div>Our knowledge is</div>
        <div className={valueClass}>{pc}%</div>
        <div>machine</div>
      </div>
    )
  }
})
