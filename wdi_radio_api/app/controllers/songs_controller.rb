class SongsController < ApplicationController
 
  def index
    @songs = Song.all

    render json: @songs
  end

  def show
    @song = Song.find(params[:id])

    render json: @song
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
    @song = Song.find(params[:id])
    @song.update!(song_params)
    render json: @song
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    render nothing:true
  end

  private
    def song_params
      params.require(:song).permit( :album, :album_art_url, :song_url, :artist, :title)
    end
end
