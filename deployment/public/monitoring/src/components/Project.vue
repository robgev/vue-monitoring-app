<template>
  <page>
    <topbar slot="header" :detailed="true" :items="projects" />
    <md-whiteframe md-elevation="3" class="changes-container">
      <div class="header">
        <div class="control-bar">
          <span class="md-display-2 project-name">{{this.$route.params.projectid}}</span>
          <div class="controls">
            <md-input-container class="select-field">
              <label for="target">Target</label>
              <md-select md-menu-class="select-field-menu" name="target" id="target" v-model="target">
                <md-option value="https://staging4.cloudfleetmanager.com">Staging4</md-option>
                <md-option value="https://staging5.cloudfleetmanager.com">Staging5</md-option>
                <md-option value="local" title="Comming soon" :disabled="true">Local</md-option>
              </md-select>
            </md-input-container>
            <sync-button
              :topButton="true"
              :onSuccess="changeHead"
              title="Sync with master"
              :latestSuccess="latestSuccess"
            />
          </div>
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
      this.initializeProjects()
    },
    data() {
      return {
        target: '',
        projects: {},
        changes: {},
        latestSuccess: null
      }
    },
    watch: {
      // call again the method if the route changes
      '$route': 'updateChanges'
    },
    methods: {
      initializeProjects() {
        const companyName = this.$route.params.companyid;
        const companyData = this.$store.state.companies[companyName];
        const { projects } = companyData;
        const defaultProjectName = Object.keys(projects)[0];
        const defaultProject = projects[defaultProjectName];
        const { changes, 'proxy-target': proxyTarget } = defaultProject;
        this.target = proxyTarget;
        this.changes = changes;
        this.projects = projects;
      },
      updateChanges() {
        const companyName = this.$route.params.companyid;
        const projectName = this.$route.query.code;
        const companyData = this.$store.state.companies[companyName];
        const { projects } = companyData;
        const { changes, 'proxy-target': proxyTarget } = projects[projectName];
        this.changes = changes;
        this.target = proxyTarget;
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
      .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .select-field {
          width: 400px;
          margin-right: 20px;
        }
      }
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
