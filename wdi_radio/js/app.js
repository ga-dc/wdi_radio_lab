angular
.module("wdi_radio",["ui.router","ngResource"])
.controller("mainController",[MainControllerFunction])
.controller("indexController",["SongsFactory",IndexControllerFunction])
.controller("showController",[ShowControllerFunction])
.config(["$stateProvider", RouterFunction])
.factory("SongsFactory",["$resource",SongsFactoryFunction])


function MainControllerFunction(){
  console.log("I am the main controller");
}
function IndexControllerFunction(SongsFactory){
  console.log("I am the index controller");
  this.allsongs = SongsFactory.query();
  console.log(this.allsongs);
}
function ShowControllerFunction(){
  console.log("I am the show controller");
}
function RouterFunction($stateProvider){
  console.log('Router setup correctly')
  $stateProvider
  .state("index", {
    url: "/index",
    templateUrl: "js/ng-views/index.html",
    controller: "indexController",
    controllerAs: "vm"
  })
  .state("show", {
    url: "/index/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "showController",
    controllerAs: "vm"
   });

}
function SongsFactoryFunction($resource){
  return $resource("http://localhost:3000/songs.json")
}
