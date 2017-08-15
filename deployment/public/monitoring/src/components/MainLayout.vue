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
