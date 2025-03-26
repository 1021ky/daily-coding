Rails.application.routes.draw do
  # パス指定がなかった場合は、productsに
  root "products#index"

  resource :session
  resources :passwords, param: :token
  resources :products
  get "up" => "rails/health#show", as: :rails_health_check
end
