class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :audio_url
      t.string :album_art
      t.string :artist
      t.string :genres
    end
  end
end
