// SongQueue.js - Defines a backbone model class for the song queue. //SO THIS IS A COLLECTION TOO
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.checkQueueWithOneSong, this);
    this.on('ended', this.dequeue, this);
    this.on('dequeue', this.dequeue, this);
  },

  checkQueueWithOneSong: function() {
    if(this.length === 1) {
      this.playFirst();
    }    
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function(songModel) {
    this.remove(songModel);
    if(this.length === 0) {
      this.trigger('stop', this);
    } else {
      this.checkQueueWithOneSong();
    }
  },

});