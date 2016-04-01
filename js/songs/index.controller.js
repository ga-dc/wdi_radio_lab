(function(){
  angular
  .module("radio")
  .controller("RadioIndexController", [
    "RadioFactory",
  SongIndexControllerFunction
])
  function SongIndexControllerFunction (RadioFactory){
    this.song= RadioFactory.query();
    }
  })();
