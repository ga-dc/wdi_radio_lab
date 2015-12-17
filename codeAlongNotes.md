

### Root Route
- x require dependencies in main `index.html`
- x define main `app.js`
- x add `ng-app`
- x add a `data-ui-view`
- x create main app module, inject `ui.router`
- x inject `songs` in main `app.js`
- x configure module with $stateProvider and a callback define call back with routes
  - x have a route to the root path of the app to be a welcome page

> If we create a new file, make sure you add that dependency to the main `index.html`

### songs
- x define a state(route) songs
- x add link to songs route in the header of the application
- x creates songs directory
- x create and define `songs.module.js`


- x create `js/songs/index.html` template
- x load angular resource cdn
- x create `js/songs/song.factory.js`
  - x inject `$resource` and add callback
  - x use `$resource` to return an API call

- x create `js/songs/index.controller.js`
  - x inject factory dependency
  - x query for songs in the controller function
  - x in `app.js` add controller and controller as
  - x add ng-repeat to `js/songs/index.html` to display songs

### Bonus
