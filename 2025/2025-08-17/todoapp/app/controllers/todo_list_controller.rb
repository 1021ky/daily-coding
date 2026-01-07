class TodoListController < ApplicationController
  before_action :authenticate_user!
  before_action :set_todo, only: [:update, :destroy]

  def index
    @todo  = current_user.todos.new
    @todos = current_user.todos.order(created_at: :desc)
  end

  def create
    @todo = current_user.todos.new(todo_params)
    if @todo.save
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to todos_path, notice: "作成しました" }
      end
    else
      # 失敗時はindexを再表示
      @todos = current_user.todos.order(created_at: :desc)
      respond_to do |format|
        format.html { render :index, status: :unprocessable_entity }
        format.turbo_stream { render :index, status: :unprocessable_entity }
      end
    end
  end

  def update
    if @todo.update(todo_params)
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to todos_path, notice: "更新しました" }
      end
    else
      respond_to do |format|
        format.html { redirect_to todos_path, alert: "更新に失敗しました" }
        format.turbo_stream { head :unprocessable_entity }
      end
    end
  end

  def destroy
    @todo.destroy
    respond_to do |format|
      format.turbo_stream
      format.html { redirect_to todos_path, notice: "削除しました" }
    end
  end

  private

  def set_todo
    @todo = current_user.todos.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:title, :description, :completed, :status)
  end
end
