<template>
  <div id="app">
    <transition name="slide-fade">
      <navigation>
        <router-view></router-view>
      </navigation>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.slide-fade-enter-active {
  transition: all .3s ease;
  display: none;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

</style>
