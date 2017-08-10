<template>
  <div id="app">
    <topbar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
export default {
  name: 'app',
  components: {
    topbar: TopBar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  padding: 2rem 4rem 4rem 4rem;
}
</style>
