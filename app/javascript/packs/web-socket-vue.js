import Vue from 'vue/dist/vue.esm.js'
import ChatMessages from '../components/ChatMessages.vue'

Vue.component('chat-messages', ChatMessages)

new Vue({
  el: '#app'
})

