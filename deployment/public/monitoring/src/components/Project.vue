<template>
  <page detailed>
    <div>
      <h1 class="title">Test</h1>
      <hr />
      <p>{{ changes }}</p>
    </div>
  </page>
</template>

<script>
  import MainLayout from './MainLayout';

  export default {
    name: 'hello',
    components: {
      'page': MainLayout,
    },
    data() {
      return {
        changes: []
      }
    },
    created () {
      this.updateChanges();
    },
    watch: {
      // call again the method if the route changes
      '$route': 'updateChanges'
    },
    methods: {
      updateChanges() {
        const companyName = this.$route.params.companyid;
        const projectName = this.$route.query.code;
        const companyData = this.$store.state.companies[companyName];
        const projectData = companyData.projects[projectName];
        const { changes } = projectData || [];
        this.changes = changes
      }
    }
  }
</script>
