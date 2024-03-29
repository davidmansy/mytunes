// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('counter', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>[Played: <%= counter %>]</td>'),

  events: {
    'click': function() {
      this.model.enqueue(); //If user clicks -> model.enqueue is called
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
