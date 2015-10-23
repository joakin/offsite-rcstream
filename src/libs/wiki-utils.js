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

var urls = {
  mediawikiwiki: 'mediawiki.org',
  wikisource: 'wikisource.org',
  commonswiki: 'commons.wikimedia.org',
  wiki: 'wikipedia.org',
  wiktionary: 'wiktionary.org',
  wikidatawiki: 'wikidata.org',
  wikivoyage: 'wikivoyage.org',
  wikiquote:  'wikiquote.org',
};

var getCodes = function( wiki ) {
  var lang;
  var p;

  projects.forEach( function ( project ) {
    var s = wiki.indexOf( project );
    if ( !lang && s > -1 ) {
      if ( s === 0 ) {
        lang = '*';
        p = wiki;
      } else {
        lang = wiki.split(project)[0];
        p = project;
      }
    }
  } );
  return [ lang, p ];
};

var getLanguage = function ( wiki ) {
  return getCodes( wiki )[0];
};

var getLogo = function ( wiki ) {
  var src;
  var code = getCodes( wiki );
  var p = code[1];

  if ( logos[p] ) {
    src = logos[p];
  } else {
    src =  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Wikimedia_Community_Logo.svg/100px-Wikimedia_Community_Logo.svg.png';
    console.log( wiki, p, ':(' );
  }
  return src;
};

var getUrl = function ( title, wiki ) {
  var code = getCodes( wiki );
  var base = urls[code[1]];
  var prefix = code[0] === '*' ? 'http://' : 'http://' + code[0] + '.';
  return prefix + base + '/wiki/' + title;
};

module.exports = {
  getCodes: getCodes,
  getLanguage: getLanguage,
  getLogo: getLogo,
  getUrl: getUrl,
};
