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
      link: function(scope){
          scope.create = function(scope){
            console.log("create?");
            scope.song.$save(function(response){
              console.log("create is called?");
              $state.go("songs", {}, {reload: true});
            });
          };
        // Start new scope here
      }
    };
  }
})();
