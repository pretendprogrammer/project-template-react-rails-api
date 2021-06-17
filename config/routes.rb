Rails.application.routes.draw do
  
  resources :clothings
  resources :swap_clothings
  resources :swap_users
  resources :swaps
  resources :users
  resources :usernames
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
