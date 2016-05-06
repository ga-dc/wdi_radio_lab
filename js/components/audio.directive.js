"use strict";

// (function(){
//   angular
//   .module("songApp")
//   .directive("audios", function(){
//     return{
//       scope: {
//         song: "="
//       },
//       template: '<audio data-ng-src="{{song.audio_url}}" controls></audio>'
//     };
//   });
// })();


"use strict";

(function(){
  angular
  .module("songApp")
  .directive("audios", function(){
    return{
      template: '<audio controls autoplay ng-src="{{song.encodedUrl}}"></audio>',
      scope: {
        song: "="
      },
      link: function(scope) {
        console.log(scope.song);
        console.log(scope.song.songUrl);
      }
    };
  });

})();
