<template>
  <div>
    <h1>{{ msg }}</h1>
    <h4>{{ msgStatus }}</h4>
    <md-button v-on:click="clickButton" class="md-raised md-primary">Test for Socket</md-button>
    <md-progress class="md-accent" md-indeterminate></md-progress>
  </div>
</template>

<script>
  export default {
    sockets: {
      connect() {
        console.log('socket connected')
      },

      customEmit(val) {
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      }
    },

    name: 'hello',

    data () {
      return {
        msg: 'Welcome to Monitoring App for QA environment',
        msgStatus: 'coming soon',
      }
    },

    methods: {
      clickButton(e) {
          console.log(this.$store.state.count);
          // $socket is socket.io-client instance 
          this.$store.commit('increment');
          this.$socket.emit('emit_method', {msg: this.$store.state.count});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
