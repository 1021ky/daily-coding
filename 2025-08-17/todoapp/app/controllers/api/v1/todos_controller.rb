class Api::V1::TodosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_todo, only: [:update, :destroy]

  def index
  end

  def create
  end

  def update
    if @todo.update(todo_params)
      render json: @todo.as_json(only: [:id, :title, :description, :completed, :created_at, :updated_at])
    else
      render json: { errors: @todo.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @todo.destroy
    head :no_content
  end

  private

  def set_todo
    @todo = current_user.todos.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:title, :description, :completed)
  end
end
