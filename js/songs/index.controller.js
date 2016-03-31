"use strict";

(function(){
  angular
  .module("songs",[
  ])
  .controller("SongIndexcontroller",[
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(){
    var vm = this;
    vm.songs =[
      {
id: 7,
title: "Hang Loose",
audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Alabama%20Shakes%20-%20Hang%20Loose.mp3",
album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/hang_loose_alabama_shakes.jpeg",
artist: "Alabama Shakes",
genre: "Rock",
created_at: "2016-03-31T14:22:10.306Z",
updated_at: "2016-03-31T14:22:10.306Z"
},
{
id: 9,
title: "Really Love",
audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/D%27Angelo%2c%20The%20Vanguard%20-%20Really%20Love.mp3",
album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/really_love_dangelo.jpeg",
artist: "D'Angelo",
genre: "R&B",
created_at: "2016-03-31T14:22:10.313Z",
updated_at: "2016-03-31T14:22:10.313Z"
},
{
id: 10,
title: "The motto",
audio_url: "http://www.wdidc.org/wdi-radio-lab-assets/mp3/Drake%20-%20The%20Motto%20%28Explicit%29%20ft.%20LIL%20WAYNE%2c%20Tyga.mp3",
album_art: "http://www.wdidc.org/wdi-radio-lab-assets/img/the_motto_drake.png",
artist: "Drake",
genre: "Hip Hop",
created_at: "2016-03-31T14:22:10.317Z",
updated_at: "2016-03-31T14:22:10.317Z"
}
    ]
    // write code to pull songs from api
  }


})();
