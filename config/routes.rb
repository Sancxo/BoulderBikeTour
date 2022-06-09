Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'site#home'
  get '/photos' => 'site#photos', as: :photos
  get '/riders' => 'site#riders', as: :riders
  get '/locations' => 'site#locations', as: :locations
  get '/contest' => 'site#contest', as: :submissions
  post '/contest' => 'site#submit'
end
