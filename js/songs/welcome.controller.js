(function () {
    angular
        .module("songs")
        .controller("SongWelcomeController", [
            SongWelcomeControllerFunction,
        ]);
    

    function SongWelcomeControllerFunction() {
        console.log("Song welcome controller called")
        var vm = this;
    }

}());