// SongQueue.js - Defines a backbone model class for the song queue. //SO THIS IS A COLLECTION TOO
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.playIfLonely, this);
    this.on('ended', this.dequeue, this);
    this.on('dequeue', this.dequeue, this);
  },

  playIfLonely: function(songModel) {
    if(this.length === 1) {
      this.playFirst(songModel);
    }
  },

  dequeue: function(songModel) {
    this.remove(songModel);
    if(this.length === 0) {
      this.trigger('stop', this);
    } else {
      this.playFirst(this.at(0));
    }
  },

  playFirst: function(songModel) {
    if(!songModel) {
      console.log("Play has been called");
      this.at(0).play();
    } else {
      songModel.play();
    }
  }

});