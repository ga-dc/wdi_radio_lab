class SongsController < ApplicationController
  def index
    @songs = Song.all
    respond_to do |format|
      format.html {render :index}
      format.json {render json: @songs}
    end

  end

  def show
    @song = Song.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @song}
    end
  end

  def create
    @song = Song.create!(song_params)
      if @song.save!
        render json: @song.to_json, status: :created
      else
        render json: @song.errors, status: :unprocessable_entity
    end
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      # render json: @song.to_json, status: :ok
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def song_params
      params.require(:song).permit(:title, :artist, :album, :album_url)
    end

end
