Rails.application.routes.draw do
  get '/chat_messages', to: 'chat_messages#index'
  root to: 'chat_messages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end