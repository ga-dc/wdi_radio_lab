class Song < ApplicationRecord
  validates :title, :album, :artist, {presence: true}
end
