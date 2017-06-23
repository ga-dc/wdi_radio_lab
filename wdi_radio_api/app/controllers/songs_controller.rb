class SongsController < ApplicationController

  def index
    @songs = Song.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @songs }
  end
end

  def show
    @song = Song.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @song }
  end
end


  def new
    @song = Song.new
  end

  def create
    @song = Song.new(song_params)

    respond_to do |format|
      if @song.save!
        # format.html { redirect_to @song, notice: 'Song was successfully created.' }
        format.json { render json: @song, status: :created, location: @song}
      else
        # format.html { render :new }
        format.json { render json: @song.errors, status: :unprocessable_entity }
    end
   end
end


def edit
  @song = Song.find(params[:id])
end

def update
  @song = Song.find(params[:id])

  respond_to do |format|
    if @song.update!(song_params)
      # format.html { redirect_to @song, notice: 'Song was successfully updated.' }
      format.json { render json: @song }
    else
      # format.html { render :new }
      format.json { render json: @song.errors, status: :unprocessable_entity }
  end
 end
end

def destroy
   @song = Song.find(params[:id])
   @song.destroy
end

def song_params
    params.require(:song).permit(:title, :album, :artist, :genre, :preview_url)
  end

end
