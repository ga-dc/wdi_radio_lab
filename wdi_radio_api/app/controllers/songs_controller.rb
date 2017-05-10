class SongsController < ApplicationController

  def index
    @songs = Song.all

    render json: @songs

  end

  def show
    @song = Song.find(params[:id])

    render json: @song
  end

  private
  def song_params
    params.require(:song).permit(:title, :artist, :album, :img_url)
  end

end
