// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('any', this.render, this);
  },

  render: function() {
    return this.collection.forEach(this.renderSong, this);
  },

  renderSong: function(song){
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.prepend(songView.render());
  }

});


  // renderMessage: function(message){
  //   if( !this.onscreenMessages[message.get('objectId')] ){
  //     var messageView = new MessageView({model: message});
  //     this.$el.prepend(messageView.render());
  //     this.onscreenMessages[message.get('objectId')] = true;
  //   }
  // }
