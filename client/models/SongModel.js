// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({


  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    // console.log('Play event triggered on ' + this.attributes.title);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }

});
