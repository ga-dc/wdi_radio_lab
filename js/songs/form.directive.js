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
      restrict: "E",
      scope: {
        song: "="
      },
      link: function(scope) {
        scope.create = function() {
          console.log("create is called");
          scope.song.$save(function(response){
            $state.go("index", {}, {reload: true});
          });
        };
        // Start new scope here
      }
    };
  }
})();
