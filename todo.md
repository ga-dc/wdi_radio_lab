## User Stories

- As a user, when I go to the app's root url, we should see a welcome page.
- As a user, when I visit "/songs", I should be able to see all of the songs in my database.
- **Bonus**: As a user, when we click on a song it starts playing.

### Questions
- What is the desired directory structure?
  - What do you mean by "create a main directory for your `wdi_radio` application"?
  - What do you mean by "create a controller file"? I can put my controllers in a separate file? How?

### Bonus I: Full CRUD Songs

- Implement full CRUD for Songs

### Bonus II: Deploy to Firebase

- Use [Firebase Hosting](https://firebase.google.com/docs/hosting/) to deploy your application

### Bonus III: Custom Player Directive

Implement a "player" using an Angular [custom directive](https://github.com/ga-wdi-lessons/angular-directives)

- When you click a song, a player view renders somewhere in the index
- Get the song to play
- Some options for the song player...
  - [Soundcloud embed](http://shareandembed.help.soundcloud.com/customer/portal/articles/2167182-embedding-a-track-or-playlist-on-wordpress)
  - [Spotify embed](https://developer.spotify.com/technologies/widgets/spotify-play-button/)
  - Stream a local audio file using the HTML `<audio>` tag

> If you finish this bonus, look into how you could integrate [Spotify's API](https://developer.spotify.com/web-api/) into your WDI Radio app.
