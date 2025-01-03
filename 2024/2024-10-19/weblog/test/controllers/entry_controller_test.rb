require "test_helper"

class EntryControllerTest < ActionDispatch::IntegrationTest
  test "正常系 作成ができること" do
    # as: :jsonでContent Type jsonで送る
    post api_entry_url, params: { title: "hello world", content: "yay, this is my first entry" }, as: :json
    assert_response :success
    json_response = JSON.parse(response.body)
    assert_equal "hello world", json_response["body"]["title"]
    assert_equal "yay, this is my first entry", json_response["body"]["content"]
  end
end
