Rails.application.routes.draw do
  get '/chat_messages', to: 'chat_messages#index'
  get '/vue_chat_messages', to: 'chat_messages#index_vue'
  root to: 'chat_messages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
