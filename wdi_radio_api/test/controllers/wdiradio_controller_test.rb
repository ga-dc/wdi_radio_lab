require 'test_helper'

class WdiradioControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get wdiradio_index_url
    assert_response :success
  end

end
