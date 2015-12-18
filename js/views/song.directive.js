(function(){
  angular
  .module('songs')
    .directive('songShow', function(){
      return {
        templateUrl: "js/views/_song_show.html",
        replace: true,
        scope: {
          song: '='
        },
        link: function(scope){
          console.log("scope!")
        }
      }
    });
})();
