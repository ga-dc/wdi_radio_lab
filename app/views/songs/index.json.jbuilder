json.array!(@songs) do |song|
  json.extract! song, :id, :title, :audio_url, :album_art, :artist, :genre
  json.url song_url(song, format: :json)
end
