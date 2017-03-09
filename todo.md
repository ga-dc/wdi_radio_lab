### Initialize a Router

- Configure your app's routing in the `app.js`.
- Add a state for the routes `/` and `/songs`.
- Create templates for these routes.

### Define a Controller

- Create a controller file and define a controller to handle songs.
- Access the data from firebase and save it as a property on the controller

### Build Views

- Use data attached to your view model to display a list of all songs

## User Stories

- As a user, when I go to the app's root url, we should see a welcome page.
- As a user, when I visit "/songs", I should be able to see all of the songs in my database.
- **Bonus**: As a user, when we click on a song it starts playing. The world is a better place

### Questions
1. What is the desired directory structure? That is, what do they mean by "create a main directory for your `wdi_radio` application"?

### Deploy

- Use the Firebase CLI to deploy your application

### Bonus

- Full CRUD for Songs

### Double Bonus

Implement a "player" [custom directive](https://github.com/ga-wdi-lessons/angular-directives)

- When you click a song, a player view renders somewhere in the index
- Get the song to play
