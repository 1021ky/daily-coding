require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /new" do
    it "returns http success" do
      get "/user/new"
      expect(response).to have_http_status(:success)
    end
  end

end
