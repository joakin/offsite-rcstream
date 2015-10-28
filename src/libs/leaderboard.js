function Leaderboard() {
  this.items = [];
}

Leaderboard.prototype = {
  slice: function () {
    return this.items.slice.apply( this.items, arguments );
  },
  hasItems: function () {
    return this.items.length ? true : false;
  },
  addItem: function ( newItem, score ) {
    var oldArray = this.items,
      isSameItem = false,
      inserted = false,
      newArray = [];

    if ( oldArray.length === 0 ) {
      this.items.push(newItem);
    } else {
      newArray = oldArray;
      // iterate through array until you find the last item that is.
      oldArray.forEach( function ( item, i ) {
        isSameItem = ( item.title === newItem.title && item.wiki === newItem.wiki );
        if ( inserted && isSameItem ) {
          // If previously we inserted it remove the old reference
          newArray.splice(i,1);
        } else if ( inserted ) {
          return;
        } else if ( item.edits <= newItem.edits ) {
          inserted = true;
          // insert the new item before the thing it is better than.
          newArray.splice(i, 0, newItem);
        }
      } );
      // sort out the last item
      if ( inserted && isSameItem ) {
        // If previously we inserted it remove the old reference
        newArray.splice(newArray.length - 1,1);
      }
      this.items = newArray.slice(0, 5);
    }
  }
};
module.exports = Leaderboard;
