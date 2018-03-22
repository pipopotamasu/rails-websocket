<template>
  <div id='chat_messages'>
    <div>
      <div v-for="(message, i) in messages" :key="i">{{ message }}</div>
    </div>
    <br/>
    <form>
      <label>
        send: <input type="text" data-behavior="speak_chat_messages" v-model="input_message" @keypress.enter.prevent="createMessage()">
      </label>
      <div>
        <button type="button" @click="unsubscribe">Disconnect</button>
      </div>
    </form>
  </div>
</template>

<script>
import ActionCable from 'actioncable'

export default {
  data () {
    return {
      input_message: '',
      messages: this.init_messages,
      connection: {}
    }
  },
  props: {
    init_messages: {
      type: Array,
      required: true
    }
  },
  created () {
    let vueInstance = this
    this.connection = ActionCable.createConsumer().subscriptions.create("ChatMessageChannel", {
      connected: function() {},
      disconnected: function() {},
      received: vueInstance.received(),
      speak: vueInstance.speak()
    })
    // Prev code
    // this.connection = ActionCable.createConsumer().subscriptions.create("ChatMessageChannel", {
    //   connected: function() {},
    //   disconnected: function() {},
    //   received: function(data) {
    //     vueInstance.messages.push(data['message'])
    //   },
    //   speak: function(message) {
    //     return this.perform('speak', {
    //       message: message
    //     })
    //   }
    // })
  },
  methods: {
    createMessage () {
      if (this.input_message == '') return false
      this.connection.speak(this.input_message)
      this.input_message = ''
    },
    speak () {
      return message => {
        return this.connection.perform('speak', {
          message: message
        })
      }
    },
    received () {
      return data => {
        this.messages.push(data['message'])
      }
    },
    unsubscribe () {
      this.connection.unsubscribe()
      alert('Disconnected!')
    }
  }
}
</script>