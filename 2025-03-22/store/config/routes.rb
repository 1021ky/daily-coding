Rails.application.routes.draw do
  # パス指定がなかった場合は、productsに
  root "products#index"

  resource :session
  resources :passwords, param: :token
  resources :products
  resources :products do
    resources :subscribers, only: [ :create ]
  end
  get "up" => "rails/health#show", as: :rails_health_check
end
