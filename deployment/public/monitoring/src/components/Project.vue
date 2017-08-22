<template>
  <page detailed>
    <md-whiteframe md-elevation="3" class="changes-container">
      <div class="header">
        <span class="md-display-3 project-name">{{this.$route.params.projectid}}</span>
        <md-button class="md-fab md-clean" title="Sync with master">
          <md-icon>sync</md-icon>
        </md-button>
      </div>
      <hr />
      <div class="scrollbar">
        <push-card
          v-for="change in changes"
          :key="change.uuid"
          :name="change.push.author.name"
          :repo="change.push.repo"
          :message="change.push.message"
          :date="change.push.date"
          :avatar="change.push.author.avatar"
          :commits="change.commits"
        />
      </div>
    </md-whiteframe>
  </page>
</template>

<script>
  import MainLayout from './MainLayout';
  import PushCard from './PushCard.vue';

  export default {
    name: 'hello',
    components: {
      'page': MainLayout,
      'push-card': PushCard
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

<style lang="scss" scoped>
.changes-container {
  height: 90vh;
  border-radius: 9px;
  padding: 15px;
  .header {
    display: flex;
    height: 75px;
    justify-content: space-between;
    .project-name {
      text-transform: capitalize;
      font-weight: 900;
      padding-left: 10px;
    }
  }
  .scrollbar {
    height: 100%;
    overflow-y: auto;
  }
}

.scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.scrollbar::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

.scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>
