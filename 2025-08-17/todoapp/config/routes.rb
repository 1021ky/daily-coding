Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "todos/index"
      get "todos/create"
      get "todos/update"
      get "todos/destroy"
    end
  end
  get "todo_list/index"
  devise_for :users # ログインをUserで管理するための設定

  get "up" => "rails/health#show", as: :rails_health_check


  root "todo_list#index"

  post '/todos', to: 'todo_list#create'
  delete '/todos/:id', to: 'todo_list#destroy', as: :todo
  get 'todo_list/index', to: 'todo_list#index'

end
