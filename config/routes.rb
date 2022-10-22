Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create, :destroy, :update]
  resources :animes, only: [:index, :show, :create, :destroy]

  resources :users, only: [:index, :show]
  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
