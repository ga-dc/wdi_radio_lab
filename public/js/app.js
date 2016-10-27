angular
.module("rubinRadio", [
  "ui.router",
  "firebase"
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("RubinSongsIndexController", [
  "$firebaseArray",
  RubinSongsIndexControllerFunction
])
.controller("RubinSongsShowController", [
  "$stateParams",
  "$firebaseObject",
  RubinSongsShowControllerFunction
])

  function RouterFunction($stateProvider){
    $stateProvider
      .state("rubinSongsIndex", {
        url: "/rubinsongs",
        templateUrl: "js/ng-views/index.html",
        controller: "RubinSongsIndexController",
        controllerAs: "vm"
      })
      .state("rubinSongsShow", {
     url: "/rubinsongs/:id",
     templateUrl: "js/ng-views/show.html",
     controller: "RubinSongsShowController",
     controllerAs: "vm"
   })
  }





  function RubinSongsIndexControllerFunction($firebaseArray){
    console.log("in RubinSongsShowControllerFunction")
    let ref = firebase.database().ref().child("rubinsongs");
    console.log("Ref=",ref)
    this.RubinSongs = $firebaseArray(ref);


    // This method is triggered whenever the user clicks "Create New Song".
    this.create = function(){
      // Once the Song has been created, clear the contents of vm.NewRubinSong.
      this.RubinSongs.$add(this.NewRubinSong).then( () => this.NewRubinSong = {} )
    }
    // This method is triggered whenever the user clicks "Delete Song".
    this.delete = function(rubinSong){ // It takes a song as an argument.
      this.RubinSongs.$remove(rubinSong)
    }
  }


  function RubinSongsShowControllerFunction($stateParams, $firebaseObject){
    // This time, ref contains a reference to a specific song.
    let ref = firebase.database().ref().child("rubinsongs/" + $stateParams.id);
    console.log("$stateParams.id=",$stateParams.id)
    console.log("In Show Controller Ref=",ref)
    // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting grumble to `this.grumble`.
    $firebaseObject(ref).$loaded().then(rubinSong => {
      console.log(rubinSong);
      this.rubinSong = rubinSong
    })
    // This method is triggered when the user clicks "Update RubinSong".
        this.update = function(){
          this.rubinSong.$save();
        }
  }
