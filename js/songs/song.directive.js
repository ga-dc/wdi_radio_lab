(function(){
  angular
  .module("songs")
  .directive("radioNewDirective", function(){
    return{
      templateUrl: "js/songs/_song_index.html",
      scope: {
        song: '='
      }
    }
  });

})();
