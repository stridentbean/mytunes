// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('all', this.render, this);
  },

  render: function() {
    this.$el.html('<div>Queue</div>');
    this.collection.forEach(this.renderSong, this);
  },

  renderSong: function(song){
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  }

});


  // renderMessage: function(message){
  //   if( !this.onscreenMessages[message.get('objectId')] ){
  //     var messageView = new MessageView({model: message});
  //     this.$el.prepend(messageView.render());
  //     this.onscreenMessages[message.get('objectId')] = true;
  //   }
  // }
