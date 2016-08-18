
(function () {
    angular
        .module("songs")
        .controller("SongIndexController", [
            "$firebaseArray",
            SongIndexControllerFunction
        ]);

    function SongIndexControllerFunction() {
        // TODO setting vm to this helps avoid some out of scope errors
        // TODO   how does this actually function?
        var vm = this;

        var ref = firebase.database().ref().child("songs");
        vm.songs = $firebaseArray(ref);

    }

}());