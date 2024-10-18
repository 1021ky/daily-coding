class EntryController < ApplicationController
  def create
    entry = Entry.new({ title: params[:title], content: params[:content] })
    entry.save!
    render json: {
      body: entry,
      status: :ok
    }
  end
end
