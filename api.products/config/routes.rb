Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api, constraints: { format: 'json' } do
    resources :products, only: [:index]
  end
end
