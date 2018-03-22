import ActionCable from 'actioncable'
import $ from 'jquery'

let App = {}

App.cable = ActionCable.createConsumer();

App.chat_message = App.cable.subscriptions.create("ChatMessageChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    return $('#chat_messages').append('<div>' + data['message'] + '</div>');
  },
  speak: function(message) {
    return this.perform('speak', {
      message: message
    });
  }
});

$(document).on('keypress', '[data-behavior~=speak_chat_messages]', function(event) {
  if (event.keyCode === 13) {
    App.chat_message.speak(event.target.value);
    event.target.value = '';
    return event.preventDefault();
  }
});