class ChatMessagesController < ApplicationController
  def index
    @chat_messages = ChatMessage.all
  end

  def index_vue
    @chat_messages = ChatMessage.all
  end
end