(function(){
  angular
  .module("songs")
  .directive("songShow", function(){
    return {
      templateUrl: 'views/songs/_song_show.html',
      replace: true,
      scope: {
        grumble: '='
      }
    }
  });
})();
