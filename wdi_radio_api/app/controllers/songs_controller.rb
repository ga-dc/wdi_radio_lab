class SongsController < ApplicationController
  def index
    @songs = Song.all

    respond_to do | format |
      format.html {render :index}
      format.json {render json: @songs}
    end
  end

  def new
    @song = Song.new
    respond_to do | format |
      format.html {render :new}
      format.json {render json: @song}
    end
  end

  def create
    @song = Song.create(song_params)

    respond_to do |format|
      if @song.save
        format.html { redirect_to @song }
        format.json { render :show, status: :created, location: @song }
      else
        format.html { render :new }
        format.json { render json: @song.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @song = Song.find(params[:id])

    respond_to do | format |
      format.html {render :show}
      format.json {render json: @song}
    end
  end

  def edit
    @song = Song.find(params[:id])
    respond_to do | format |
      format.html {render :edit}
      format.json {render json: @song}
    end
  end

  def update
    @song = Song.find(params[:id])

    respond_to do |format|
      if @song.update(song_params)
        format.html { redirect_to @song, notice: 'song was successfully updated.' }
        format.json { render :show, status: :ok, location: @song }
      else
        format.html { render :edit }
        format.json { render json: @song.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy

    redirect_to songs_path
  end

  private
  def song_params
    params.require(:song).permit(:title,:album,:artist,:photo_url)
  end
end
