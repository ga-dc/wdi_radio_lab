(function(){
  angular
    .module( "radio" )
    .directive("myCustomDirective", function(){
      return {
        templateUrl: "js/_test_show.html",
        replace: true,
        scope: {
          song: '='
        },
        link: function(scope){
          console.log("used")
          scope.myName = "Evan"
        }
      }
    })

})();
