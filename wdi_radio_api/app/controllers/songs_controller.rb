class SongsController < ApplicationController

  def index
    @songs = Song.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @songs }
    end
  end

  # def show
  #   @song = Song.find(params[:song_id])
  #
  #   respond_to do |format|
  #     format.html { render :show }
  #     format.json { render json: @song }
  #   end
  # end
  #
  # def create
  #   @song = Song.new(song_params)
  #
  #   respond_to do |format|
  #    if @song.save!
  #      format.html { redirect_to @song, notice: 'Song was successfully created.' }
  #      format.json { render json: @song, status: :created, location: @song }
  #    else
  #      format.html { render :new }
  #      format.json { render json: @song.errors, status: :unprocessable_entity }
  #    end
  #  end
  # end

end
