// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template('<div data-url="<%= url %>" ><%= artist %>:<%= title %></div>'),

  render: function() {
    return this.$el.html(this.template(this.model.toJSON()));
  }
});
