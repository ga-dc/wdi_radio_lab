# :fire: WDI Radio :fire:

> View deployed solution [here](https://wdi-radio.firebaseapp.com/)

Please fork this repo. By 9:00am Friday, submit your work as a **pull request**.

## User Stories

- As a user, when I go to the app's root url, we should see a welcome page.
- As a user, when I visit "/songs", I should be able to see all of the songs in my database.
- **Bonus**: As a user, when we click on a song it starts playing. The world is a better place

## Setup

> What follows are not explicit steps. Just guidelines to approach building out this Angular application.

### Angular Setup

- Create a main directory for your `wdi_radio` application.
- Create an `index.html` in your application's main directory.
- Make sure to load in any appropriate libraries via CDNs
- Create a skeleton for your content and include all dependencies.
- Create the main `app.js` file and create the module for this angular app.
- Create a module that defines songs.

### Firebase Setup

- Create a new project in the [Firebase console](https://console.firebase.google.com/)
- When prompted, make sure to choose the right most option: "Add Firebase to your web app".
- After selecting the option, you should see a notification with a code snippet that contains your application's configuration credentials.
- Make sure to include that snippet in your app's main `index.html` before any of your `js` files

### Initialize a Router

- Configure your app's routing in the `app.js`.
- Add a state for the routes `/` and `/songs`.
- Create templates for these routes.

### Define a Controller

- Create a controller file and define a controller to handle songs.
- Access the data from firebase and save it as a property on the controller

### Build Views

- Use data attached to your view model to display a list of all songs

### Deploy

- Use the Firebase CLI to deploy your application

### Bonus

- Full CRUD for Songs

### Double Bonus

Implement a "player" [custom directive](https://github.com/ga-wdi-lessons/angular-directives)

- When you click a song, a player view renders somewhere in the index
- Get the song to play
