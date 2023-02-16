<template>
  <div class="home">
    <input type="text" v-model="message">
    <button class="btn" @click="send">Отправить</button>
    <div class="chat"></div>
  </div>
</template>

<script>
const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: null
    }
  },
  methods: {
    send() {
      socket.emit('message', this.message);
    }
  }
}
</script>
