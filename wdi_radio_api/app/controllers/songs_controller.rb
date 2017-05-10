class SongsController < ApplicationController
  def index
    @songs = Song.all

    respond_to do |format|
      format.json {render json: @songs}
    end
  end
  def show
    @song = Song.find(params[:id])

    respond_to do |format|
      format.json {render json: @song}
    end
  end
  def new
    @song = Song.new

    respond_to do |format|
      format.json {render json: @song}
    end
  end
  def create
    @song = Song.new(song_params)

    respond_to do |format|
      if @song.save
        format.html { redirect_to @song, notice: 'Song was created.' }
        format.json { render :show, status: :created, location: @song }
      else
        format.html { render :new }
        format.json { render json: @song.errors, status: :unprocessable_entity }
      end
    end
  end

    private
    def song_params
      params.require(:title).permit(:title, :album, :artist, :photo_url)
    end
  end
