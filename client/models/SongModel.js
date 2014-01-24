// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({


  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
    //enqueue event triggered -> goes to Songs collection
    //AppModel listen to Songs collection and so will catch the event
    //When catched, appmodel will add the song to SongQueue
    //SongQueue will catch the add event and will call its playIfLonely method
  }


});
