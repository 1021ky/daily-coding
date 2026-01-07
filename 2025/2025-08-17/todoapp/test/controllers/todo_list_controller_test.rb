require "test_helper"

class TodoListControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get todo_list_index_url
    assert_response :success
  end
end
