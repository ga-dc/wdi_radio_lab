# WDI Radio Lab

Please fork this repo. By  9:00am Friday, submit your work as a **pull request**.

## User Stories

- As a user, we should be able to see all of our songs in the database.
- As a user, when we first go to the app, we see a welcome page.
- **Bonus**: As a user, when we select a song it starts playing.  The world is a better place

## Setup

### API Setup

Fork and clone [this repo](https://github.com/ga-dc/wdi_radio_api). We'll be using a rails back end. It'll be a single model CRUD API for songs. Lets go into this directory and run all our initial Rails setup and run our server.

```bash
$ cd wdi_radio_api
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rails s
```

This will be the backend we'll be using, from http://localhost:3000.

> What follows are not explicit steps. Just guidelines to approach building out this Angular application.

### Angular Setup

- Create a main directory for your `wdi_radio` application.
- Create an `index.html` in your application's main directory.
- Create a skeleton for your content and include all dependencies.
- Create the main `app.js` file and create the module for this angular app.
- Create a module that defines songs.

### Router

- Configure your app's routing in the `app.js`.
- Add a state for the routes `/` and `/songs`.
- Create templates for these routes.

### Controller

- Create a controller file and define a controller to handle songs.

### Factory

- Create a factory for songs that point to the API we setup earlier.
- Remember to inject this dependency into the controller.

### Views

- Use directives in the html to list all songs

### Bonus

- Full CRUD for Songs
- DRY up code utilizing Custom Directives

### Double Bonus

Implement a "player" custom directive

- When you click a song, a player view renders somewhere in the index
- Get the song to play
