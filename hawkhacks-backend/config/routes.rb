Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  post "api/events" => "events#create"
  get "api/events" => "events#index"
  delete "api/events/:id" => "events#delete"
  put "api/events/:id" => "events#update"
  get "api/events/:id" => "events#show"

  post "users/sign_up" => "users#sign_up"
  post "users/sign_in" => "users#sign_in"
end
