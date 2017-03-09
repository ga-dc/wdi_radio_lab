angular
.module("radioApp", [])
.controller("RadioController",
[RadioControllerFunction]
)





function RadioControllerFunction(){
  this.songs = Songs.all
}
