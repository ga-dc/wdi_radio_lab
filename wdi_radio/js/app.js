angular
  .module("wdiRadio", [
    "ui.router"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    console.log('Router set up correctly')
  }
