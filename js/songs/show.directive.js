(function(){
  angular
  .module("songs")
  .directive("songsShow", function(){
    return {
      templateUrl: "js/songs/_show_song.html",
      scope: {
        song: "="
      }
    };
  });
})();
