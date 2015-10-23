import React from 'react'

export default React.createClass({
  render: function() {
    var wiki = this.props.wiki;
    var src;
    var projects = [ 'test2wiki', 'wikidatawiki', 'mediawikiwiki', 'wikisource',
      'wikimania',
      'commonswiki', 'wiki', 'wiktionary' ];
    // from https://commons.wikimedia.org/wiki/Category:High-resolution_official_Wikimedia_logos
    var logos = {
      mediawikiwiki: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/MediaWiki-notext.svg/100px-MediaWiki-notext.svg.png',
      wikisource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/200px-Wikisource-logo.svg.png',
      commonswiki: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/100px-Commons-logo.svg.png',
      wiki: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wikipedia%27s_W.svg/100px-Wikipedia%27s_W.svg.png',
      wiktionary: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wiktionary-logo.svg/100px-Wiktionary-logo.svg.png',
      wikidatawiki: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wikidata-logo-black-en.svg/100px-Wikidata-logo-black-en.svg.png',
      wikivoyage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wikivoyage-Logo-v3-icon.svg/100px-Wikivoyage-Logo-v3-icon.svg.png',
      wikiquote: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/100px-Wikiquote-logo.svg.png',
    };
    var lang = 'en';

    projects.forEach( function ( project ) {
      var p;
      var s = wiki.indexOf( project );
      if ( !src && s > -1 ) {
        if ( s === 0 ) {
          lang = '*';
          p = wiki;
        } else {
          lang = wiki.split(project)[0];
          p = project;
        }
        if ( logos[p] ) {
          src = logos[p];
        } else {
          console.log( wiki, p, ':(' );
        }
      }
    } );
    if ( !src ) {
      src =  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Wikimedia_Community_Logo.svg/100px-Wikimedia_Community_Logo.svg.png';
    }

    return (
      <div className="Logo">
        <img src={src} alt={wiki} />
        <span>{lang}</span>
      </div>
    )
  }
})
