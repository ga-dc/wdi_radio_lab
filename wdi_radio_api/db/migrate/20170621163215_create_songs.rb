class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :song_title
      t.string :artist
      t.string :preview_url
    end
  end
end
