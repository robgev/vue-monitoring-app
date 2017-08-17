<template>
  <page detailed>
    <div>
      <h1 class="title">Test</h1>
      <hr />
      <p>{{ this.$route.params }}</p>
    </div>
  </page>
</template>

<script>
  import MainLayout from './MainLayout';

  export default {
    name: 'hello',
    components: {
      'page': MainLayout,
    }
  }
</script>
