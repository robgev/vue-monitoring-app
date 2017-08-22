<template>
  <div>
    <topbar :detailed="detailed" />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  name: 'page',
  components: {
    topbar: TopBar
  },
  props: {
    detailed: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.content {
  padding: 2rem 4rem 4rem 4rem;
  height: calc(100vh - 64px);
}
</style>
