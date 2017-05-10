class SongsController < ApplicationController
 
  def index
    @songs = Song.all

    render json: @songs
  end

  def show
    @song = Song.find(params[:id])

    render json: @song
  end

  def edit
  end

  def create
    @song = Song.new(song_params)

    if @song.save
      render :show, status: :created, location: @song 
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  def update
    if @song.update(song_params)
      render :show, status: :ok, location: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @song.destroy
    format.json { head :no_content }
  end

  private
    def song_params
      params.require(:song).permit(:song, :album, :album_art_url, :song_url, :artist)
    end
end
