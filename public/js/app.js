angular
    .module("radio", [
        "ui.router",
        "firebase"
    ])
    .config([
        "$stateProvider",
        RouterFunction
    ])
    .controller("RadioWelcomeController", [])
    .controller("RadioIndexController", [
        "$firebaseArray",
        "$firebaseObject",
        RadioIndexControllerFunction
    ])

function RouterFunction($stateProvider, RadioWelcomeController) {
    $stateProvider
        .state("Welcome", {
            url: "",
            templateUrl: "js/ng-views/welcome.html"
        })
        .state("radioIndex", {
            url: "/songs",
            templateUrl: "js/ng-views/index.html",
            controller: "RadioIndexController",
            controllerAs: "vm"
        })
}


function RadioIndexControllerFunction($firebaseArray, $firebaseObject) {
    var vm = this;
    let ref = firebase.database().ref().child("songs");
    $firebaseArray(ref).$loaded().then(function(songs) {
        vm.songs = songs;
    });

    vm.create = function() {
        vm.songs.$add(vm.newSong).then(() => vm.newSong = {})
    }

    $firebaseObject(ref).$loaded().then(song => vm.song = song);
    vm.update = function(song) {
        vm.songs.$save(song);

    }
    vm.delete = function(song) {
      vm.songs.$remove(song);

    }
}
