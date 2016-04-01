"use strict";

(function (){
  angular
  .module("myMusic", [
    "ui.router",
    "music"
])
.config ([
  "$stateProvider",
  RouterFunction
]);

function RouterFunction ($stateProvider){
  $stateProvider
  .state("musicIndex", {
    url:"/music",
    templateUrl:"js/music/index.html",
    controller:"musicIndexController",
    controllerAs: "musicIndexViewModel"
})
.state("musicShow", {
  url:"/music/:id",
  templateUrl:"js/music/show.html",
  controller:"musicShowController",
  controllerAs: "musicShowViewModel"
});

}
})();
