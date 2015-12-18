require 'httparty'

Song.destroy_all

artists = [
  "nosaj+thing",
  "flume",
  "kendrick+lamar",
  "beatles",
  "daft+punk",
  "drake",
  "killers",
  "m83",
  "ratatat"
]

artists.each do |artist|
  # make all the assumptions!
  results = JSON.parse(HTTParty.get("https://itunes.apple.com/search?term=#{artist}"))["results"];
  results[0...10].each do |result|
    puts result["trackName"]
    Song.create({
      title: result["trackName"],
      audio_url: result["previewUrl"],
      album_art: result["artworkUrl100"],
      artist: result["artistName"],
      genre: result["primaryGenreName"]
    })
  end
end
