<template>
  <page>
    <topbar slot="header" :detailed="true" :items="projects" />
    <md-whiteframe md-elevation="3" class="changes-container">
      <div class="header">
        <div class="control-bar">
          <span class="md-display-2 project-name">{{this.$route.params.projectid}}</span>
          <sync-button
            :topButton="true"
            :onSuccess="changeHead"
            title="Sync with master"
            :latestSuccess="latestSuccess"
          />
        </div>
        <hr />
      </div>
      <div class="scrollbar">
        <push-card
          v-for="change in changes"
          :key="change.uuid"
          :onSuccess="changeHead"
          :repo="change.push.repo"
          :date="change.push.date"
          :commits="change.commits"
          :latestSuccess="latestSuccess"
          :message="change.push.message"
          :name="change.push.author.name"
          :avatar="change.push.author.avatar"
        />
      </div>
    </md-whiteframe>
  </page>
</template>

<script>
  import TopBar from './TopBar'
  import MainLayout from './MainLayout';
  import PushCard from './PushCard.vue';
  import SyncButton from './SyncButton';

  export default {
    name: 'hello',
    components: {
      'topbar': TopBar,
      'page': MainLayout,
      'push-card': PushCard,
      'sync-button': SyncButton,
    },
    async beforeMount() {
      const { companyid } = this.$route.params;
      const companyData = this.$store.state.companies[companyid];
      const { projects } = companyData
      if( !Object.keys(projects).length ) {
        await this.$store.dispatch('load_company_projects', { companyid })
      };
      this.updateChanges()
    },
    data() {
      return {
        changes: [],
        projects: {},
        latestSuccess: null
      }
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
        const { projects } = companyData;
        const projectData = projects[projectName];
        const { changes } = projectData || [];
        this.projects = projects;
        this.changes = changes;
      },
      changeHead(latestHead) {
        this.latestSuccess = latestHead;
      }
    }
  }
</script>

<style lang="scss" scoped>
.changes-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 9px;
  padding: 15px;
  .header {
    display: flex;
    flex-direction: column;
    height: 5%;
    min-height: 75px;
    .control-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    };
    .project-name {
      text-transform: capitalize;
      font-weight: 900;
      padding-left: 10px;
    }
  }
  .scrollbar {
    display: flex;
    flex-direction: column;
    height: 95%;
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
