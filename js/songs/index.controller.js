(function(){
  angular
  .module("radio")
  .controller("RadioIndexController", index)
  function index(){
    this.pizza = "yum"
    console.log("Loaded")
    }
  }());
