"use strict";

(function(){
  angular
  .module("songs")
   .controller("IndexController",[
     "radioBipFactory",
     IndexControllerFunction
   ]
 );



function IndexControllerFunction(radioBipFactory){
this.songs = radioBipFactory.query();
    }
})();
