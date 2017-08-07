<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>{{ msgStatus }}</h4>
    <md-progress class="md-accent" md-indeterminate></md-progress>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Monitoring App for QA environment',
      msgStatus: 'coming soon',
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
