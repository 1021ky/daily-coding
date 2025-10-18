require "test_helper"

class ZipCodesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get zip_codes_show_url
    assert_response :success
  end
end
