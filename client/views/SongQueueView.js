// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  addOne: function(songModel) {
    var songQueueEntryView = new SongQueueEntryView({model: songModel});
    this.$el.append(songQueueEntryView.render().el);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
    return this.$el;
  }

});
