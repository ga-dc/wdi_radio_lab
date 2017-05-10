class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
    	t.string :title
    	t.string :album
    	t.string :album_art_url
    	t.string :song_url
    	t.string :artist
      t.timestamps
    end
  end
end
