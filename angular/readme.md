# WDI Radio

Please fork this repo. By 5:00pm Wednesday, May 10th, submit your work as a **pull request**.

## User Stories

- As a user, when I go to the app's root url, I should see a welcome page.
- As a user, when I visit "/songs", I should be able to see all of the songs in my database.
- **Bonus**: As a user, when I click on a song it starts playing. The world is a better place

## Setup

> What follows are not explicit steps. Just guidelines to approach building out this Angular application.

### Rails Setup
- Run `rails new -d postgresql wdi_radio_api` to create a new rails app for your back end
- Set up a model and run a migration for songs
- Write seed data to create instances of songs
- Define a controller for songs that has at least an `index` method that **renders
JSON** for all songs in your database

### Angular Setup

- Create a main directory for your `wdi_radio` application
- Create an `index.html` in your application's main directory
- Make sure to load in any appropriate libraries via CDNs
- Create a `js` directory to store all of your Javascript files
- Create the main `app.js` file and define the module for the angular app
- Bootstrap the newly defined module in `index.html`

### Initialize a Router

- Add `ui.router` as a dependency and configure your app's routing in `app.js`
- Add a state for the routes `/` and `/songs`
- Create templates for these routes

## Set Up Resources
- Add `ngResource` as a dependency and set up a factory to retrieve data from your
 Rails API running on  `localhost`

### Define a Controller

- Define a controller to handle songs
- Access the data from your songs factory and save it as a property on the controller

### Build Views

- Use data attached to your view model to display a list of all songs

### Bonus I: Full CRUD Songs

- Implement full CRUD for Songs

### Bonus II: Custom Player Directive

Implement a "player" using an Angular [custom directive](https://github.com/ga-wdi-lessons/angular-directives)

- When you click a song, a player view renders somewhere in the index
- Get the song to play
- Some options for the song player...
  - [Soundcloud embed](http://shareandembed.help.soundcloud.com/customer/portal/articles/2167182-embedding-a-track-or-playlist-on-wordpress)
  - [Spotify embed](https://developer.spotify.com/technologies/widgets/spotify-play-button/)
  - Stream a local audio file using the HTML `<audio>` tag

> If you finish this bonus, look into how you could integrate [Spotify's API](https://developer.spotify.com/web-api/) into your WDI Radio app.
