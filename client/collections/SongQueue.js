// SongQueue.js - Defines a backbone model class for the song queue. //SO THIS IS A COLLECTION TOO
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(songModel) {
      if(this.length === 1) {
        this.playFirst(songModel);
      }
    }, this);

    this.on('ended', function(songModel) {
      console.log("Caught the ended event in collection");
      this.removeSong(songModel);
      if(this.at(0)) {
        this.playFirst(this.at(0));
      }
    }, this);

    this.on('dequeue', function(songModel) {
      console.log("Caught the dequeue event in collection");
      this.removeSong(songModel);
    }, this);

  },

  playFirst: function(songModel) {
    if(!songModel) {
      this.at(0).play();
    } else {
      songModel.play();
    }
  },

  removeSong: function(songModel) {
    this.forEach(function(song) {
      if(song.cid === songModel.cid) {
        this.remove(song);
      }
    }, this);
  }

});