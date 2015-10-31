function Leaderboard (id) {
  this.items = []
  this.id = id
}

Leaderboard.prototype = {
  slice: function () {
    return this.items.slice.apply(this.items, arguments)
  },
  hasItems: function () {
    return this.items.length ? true : false
  },
  updateExisting: function ( newItem, score ) {
    var inserted = false;
    this.items.forEach( function ( item ) {
      if ( item.title === newItem.title && item.wiki === newItem.wiki ) {
        item.edits = newItem.edits;
        inserted = true;
      }
    } );
    return inserted;
  },
  addItem: function (newItem) {
    var oldArray = this.items,
      isSameItem = false,
      inserted = false,
      newArray = []

    if (oldArray.length === 0) {
      this.items.push(newItem)
    } else {
      inserted = this.updateExisting( newItem );
      newArray = oldArray
      // iterate through array until you find the last item that is.
      oldArray.forEach(function (item, i) {
        if (inserted) {
          return
        } else if (item.edits <= newItem.edits) {
          inserted = true
          // insert the new item before the thing it is better than.
          newArray.splice(i, 0, newItem)
        }
      })
      // Add to the end if not inserted as it is smaller than everything
      if ( !inserted ) {
        newArray.push( newItem );
      }
      this.items = newArray.slice(0, 5)
    }
  }
}
module.exports = Leaderboard
