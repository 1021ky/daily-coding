Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # ref https://guides.rubyonrails.org/getting_started.html#crud-routes
  resources :products
  # 冗長になるが1つ1つ書くなら以下のようになる
  # get "/products", to: "products#index"

  # get "/products/new", to: "products#new"
  # post "/products", to: "products#create"

  # get "/products/:id", to: "products#show"

  # get "/products/:id/edit", to: "products#edit"
  # # handling errors and updating specific attributes of the record, and typically triggered by a PATCH request.
  # patch "/products/:id", to: "products#update"
  # # handling errors and updating the entire record, and typically triggered by a PUT request.
  # put "/products/:id", to: "products#update"

  # delete "/products/:id", to: "products#destroy"


end
