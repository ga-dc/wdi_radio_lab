"use strict";

(function() {
    angular
        .module("songs")
        .controller("SongIndexController", [
            "$sce",
            "$firebaseArray",
            SongIndexControllerFunction
        ]);

    function SongIndexControllerFunction($sce, $firebaseArray) {
        var vm = this;
        var ref = firebase.database().ref().child("songs");
        vm.songs = $firebaseArray(ref);

        // // Create
        // vm.newSong = {};
        // vm.create = function() {
        //         vm.songs.$add(vm.newSong);
        //         vm.newSong = {};
        //     }
            // Update
        vm.update = function(song) {
            console.log("editing");
            vm.toggleEdit(song);
            vm.songs.$save(song);
        }
            // Destroy
        vm.destroy = function(song) {
            console.log("destroying");
            vm.toggleEdit(song);
            vm.songs.$remove(song);
        }
            // Play
        vm.play = function(song) {
            console.log(song.title);
            vm.playSong = song;
            console.log(vm.playSong.title);
            // workaround for ng-src not allowing expression {{song.audio_url}}
            vm.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url);
        }
            // DOM Manipulation Methods
        // vm.toggleNew = function() {
        //     vm.newSong.visible = !vm.newSong.visible;
        // }
        vm.toggleEdit = function(song) {
            song.showEdit = !song.showEdit;
        }

    }

}());
