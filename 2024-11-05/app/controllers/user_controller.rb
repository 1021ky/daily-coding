class UserController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def index
    users = User.all
    render json: users
  end

  def create
    User.create!(username:"hoge", password: "foobar", password_confirmation: "foobar")
  end
end
