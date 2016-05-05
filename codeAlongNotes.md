## Hints

### Root Route

- require dependencies in main `index.html`
- define main `app.js`
- add `ng-app`
- add a `data-ui-view`
- create main app module, inject `ui.router`
- inject `songs` in main `app.js`
- configure module with $stateProvider and a callback define call back with routes
  - have a route to the root path of the app to be a welcome page

> If we create a new file, make sure you add that dependency to the main `index.html`

### songs
- define a state(route) songs
- add link to songs route in the header of the application
- creates songs directory
- create and define `songs.module.js`


- create `js/songs/index.html` template
- load angular resource cdn
- create `js/songs/song.factory.js`
  - inject `$resource` and add callback
  - use `$resource` to return an API call

- create `js/songs/index.controller.js`
  - inject factory dependency
  - query for songs in the controller function
  - in `app.js` add controller and controller as
  - add ng-repeat to `js/songs/index.html` to display songs
