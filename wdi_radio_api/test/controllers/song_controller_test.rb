require "test_helper"

class SongControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get song_index_url
    assert_response :success
  end
end
