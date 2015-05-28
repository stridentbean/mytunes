// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

    tagname: 'tl',

    template: _.template('<div class="song" > \
                       <div class="artist"><%- artist %></div> \
                       <div class="title"><%- title %></div> \
                       </div>'),

    events:{
      'click': function() {
        this.model.dequeue();
      }
    },

    render: function(){
      this.$el.html(this.template(this.model.attributes));
      return this.$el;
    }
});



// var MessageView = Backbone.View.extend({



//   render: function(){
//     this.$el.html(this.template(this.model.attributes));
//     return this.$el;
//   }

// });

 // {
 //    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
 //    title: "If Your Girl Only Knew",
 //    artist: "Aaliyah",
 //  }
