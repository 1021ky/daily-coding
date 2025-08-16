class TodoItemsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create
  def index
    @todo_items = TodoItem.all
  end

  def update
    # @todo_item = TodoItem.find(params[:id])
    # if @todo_item.update(todo_item_params)
    #   redirect_to todo_items_path
    # else
    #   render :edit
    # end
  end

  def create
    Rails.logger.debug "DEBUG params: #{params.to_unsafe_h.inspect}"
    todo_item_form = Forms::TodoItemForm.new(params)
    unless todo_item_form.valid?
      render json: { errors: todo_item_form.errors.full_messages }, status: :bad_request
      return
    end
    @todo_item = todo_item_form.to_model
    @todo_item.save!
    redirect_to todo_items_path

  end

  def destroy
  end
end
