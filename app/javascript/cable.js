// import action_cable
// import ./channels/chat_message.coffee

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);