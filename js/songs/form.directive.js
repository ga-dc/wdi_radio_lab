(function(){
  "use strict";
  angular
    .module("songs")
    .directive("songForm", [
      "SongFactory",
      "$state",
      FormDirectiveFunction
    ]);

  function FormDirectiveFunction(SongFactory, $state){
    return{
      templateUrl: "js/songs/_form.html",
      scope: {
        song: "="
      },
      link: function(scope) {
        scope.create = function() {
          scope.song.$save(function(response){
            $state.go("index", {}, {reload: true});
          });
        };
        // Start new scope here
      }
    };
  }
})();
