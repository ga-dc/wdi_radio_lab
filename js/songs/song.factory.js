"user strict";

(function() {
  angular
  .module("songs")
  .factory("songFactory", [
    "$resource",
    songFactoryFunction
  ]);
  function songFactoryFunction($resource) {
    return {
      helloWorld: function(){
        console.log("Hello World!");
      }
    };
  }
})();
