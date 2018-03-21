<template>
  <div id='chat_messages'>
    <div>
      <div v-for="(message, i) in messages" :key="i">{{ message }}</div>
    </div>
    <br/>
    <form>
      <label>
        発言する: <input type="text" data-behavior="speak_chat_messages" v-model="message" @keypress.enter.prevent="createMessage()">
      </label>
    </form>
  </div>
</template>

<script>
import ActionCable from '../../../vendor/bundle/ruby/2.4.0/gems/actioncable-5.1.5/lib/assets/compiled/action_cable'

export default {
  data () {
    return {
      message: ''
    }
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  methods: {
    createMessage () {
      this.message = ''
    }
  }
}
</script>