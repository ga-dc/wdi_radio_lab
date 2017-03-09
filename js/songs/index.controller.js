
(function () {
    angular
        .module("songs")
        .controller("SongIndexController", [
            "$firebaseArray",
            SongIndexControllerFunction,
        ]);

    function SongIndexControllerFunction($firebaseArray) {
        console.log("Song index controller function called");

        var vm = this;

        var ref = firebase.database().ref().child("songs");
        vm.songs = $firebaseArray(ref);
    }

}());