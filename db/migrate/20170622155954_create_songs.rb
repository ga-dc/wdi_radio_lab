class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.string :photo_url

      t.timestamps
    end
  end
end
