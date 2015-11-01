import React from 'react'

export default React.createClass({
  render: function () {
    var titles = this.props.titles;
    var totalEdits = 0;
    var topNs = { edits: 0, ns: 0 };
    var namespaces = titles.namespaces
    for( var key in namespaces ) {
      if ( namespaces.hasOwnProperty( key ) ) {
        if ( namespaces[key].edits > topNs.edits ) {
          topNs.edits = namespaces[key].edits;
          topNs.ns = key;
        }
        totalEdits += namespaces[key].edits;
      }
    }
    var action = 'Wiki stuff';
    switch ( topNs.ns ) {
      case '0':
        action = 'Writing';
        break;
      case '1':
        action = 'Talking';
        break;
      case '2':
        action = 'Editing their user page';
        break;
      case '6':
        action = 'Picture uploading'
        break;
        break;
      case '14':
        action = 'Categorizing'
        break;
      case '2300':
        action = 'Coding'
        break;
    }
    return (
      <div className="ActionBox">
      <h3>Top Namespace</h3>
        <p>{topNs.ns}: {action} ({((topNs.edits/totalEdits) * 100).toFixed(1)}% of edits)</p>
      </div>
    )
  }
})
