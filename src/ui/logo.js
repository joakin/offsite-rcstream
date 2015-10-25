import React from 'react'
import utils from './../libs/wiki-utils'

export default React.createClass({
  render: function() {
    var wiki = this.props.wiki;
    var lang = utils.getLanguage( wiki );
    var src = utils.getLogo( wiki );

    return (
      <div className="Logo">
        <img src={src} alt={wiki} />
        <span>{lang}</span>
      </div>
    )
  }
})
