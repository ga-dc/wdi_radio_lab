class SongsController < ApplicationController
  def index
    @songs = Song.all
    render json: @songs.to_json, status: :ok
  end
end
