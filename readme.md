# WDI Radio Lab

Please fork this repo. On Friday, submit your work a **pull request**.

## Setup

### API Setup

Fork and clone [this repo](https://github.com/ga-dc/wdi_radio_api). We'll be using a rails back end. It'll be a single model CRUD API for songs. Lets go into this directory and run all our initial rails setup and run our server.

```bash
$ cd wdi_radio_api
$ rake db:create
$ rake db:migrate
$ rake db:seed
$ rails s
```

This will be the backend we'll be using, from http://localhost:3000.

> What follows are not explicit steps. Just guidelines to approach building out this angular application.

### Angular Setup
- Create a main directory for your `wdi_radio` application.
- Create an `index.html` in your application's main directory.
- Create a skeleton for your content and include all dependencies.
- Create the main `app.js` file and create the module for this angular app.
- Create a module that defines songs.


## UI-Router & Resources/Factories (Wednesday)
### User Stories
As a user, when we go to the app, we see a welcome page.
As a user, we should be able to see all of our songs in the database.
As a user, we should be able to see a single song page.

### Router
- Add a router to the `app.js`.
- Add a state for the routes `/welcome` and `/songs`.
- Create templates for these routes.

### Controller
- Create a controller file and define a controller to handle songs.

### Factory

- Create a factory for songs that point to the API we setup earlier.
- Remember to inject this dependency into the controller.

### Views
- Use directives in the html to list all songs
- Use directives in the html to view a single song(separate template)

### Bonus
- Implement full CRUD for songs

## Custom Directive (Thursday)
### User Stories

The same as before.  We are refactoring existing functionality, not adding new features.
Plus:
- As a user, when we select a song it starts playing.  The world is a better place.

### Refactor to Custom Directives
- Convert your existing controllers to custom directives.  One at a time.  Commit early, commit often.

### Bonus
- Show the song on the index page.
  - When you click a song, it renders somewhere in the index
- Implement/refactor full CRUD for songs
- Get the song to play


## Authorization and Tidying up (Friday)

### User Stories

- As a user, we should be able to identify ourselves (sign up, login, logout)
- As an authorized user, we should be able to favorite

### Add user authentication
- User can sign up, login, logout
- Authenticated user can favorite a song(s)

### Tidy up
- Review and clean up, especially directives
