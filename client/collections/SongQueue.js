// SongQueue.js - Defines a backbone model class for the song queue.
// var SongQueue = Songs.extend({

//   initialize: function(){
//   }

// });

var SongQueue = Songs.extend({




  initialize: function(){
    //debugger;
    //this.on('add', function(){this.trigger('add'), this});
  },

  playFirst: function() {
    //call play on first elem inside collection
    this.models[0].play();


    //check when song is done

    //shift the first item off the array
    //call play first on the first elem inside of collection
  },

  removeFirst: function(){
    console.log('reached');
      this.models.shift();
  }



});
