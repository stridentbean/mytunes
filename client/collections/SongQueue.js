// SongQueue.js - Defines a backbone model class for the song queue.
// var SongQueue = Songs.extend({

//   initialize: function(){
//   }

// });

var SongQueue = Songs.extend({


  initialize: function(){
    this.on('dequeue', function(song){
      this.remove(song);
    });

    this.on('add', function() {
      if(this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.removeFirst();
      this.playFirst();
    })
  },

  playFirst: function() {
    //call play on first elem inside collection
    console.log(this.models);
    //not sure if playing right order
    //play song immediately when it is the only song in the queue
    if(this.models.length > 0) {
      this.models[0].play();
      console.log("new play");
    }


    //check when song is done

    //shift the first item off the array
    //call play first on the first elem inside of collection
  },

  removeFirst: function(){
    console.log('reached');
      this.models.shift();
  }

});
