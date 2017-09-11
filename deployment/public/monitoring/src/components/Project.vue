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
              <md-select @opened="openSnackbar" @selected="changeProxy" md-menu-class="select-field-menu" name="target" id="target" v-model="target">
                <md-option value="https://staging4.cloudfleetmanager.com">Staging4</md-option>
                <md-option value="https://staging5.cloudfleetmanager.com">Staging5</md-option>
                <md-option :value="localTarget">Local</md-option>
              </md-select>
              <md-tooltip md-direction="top">Change proxy target</md-tooltip>
              <md-snackbar md-position="top right" ref="snackbar" :md-duration="4000">
                <span>If you are about to choose the local staging target, please consider logging out of the project first.</span>
                <md-button class="md-accent" @click="$refs.snackbar.close()">Close</md-button>
              </md-snackbar>
            </md-input-container>
            <sync-button
              :topButton="true"
              :onSuccess="changeHead"
              tooltip="Sync with master"
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
          :avatar="getAvatarHQ(change.push.author.avatar)"
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
      const { projects } = companyData;
      if( !Object.keys(projects).length ) {
        await this.$store.dispatch('load_company_projects', { companyid });
        await this.$store.dispatch('load_project_states', { companyid });
      };
      this.initializeProjects();
    },
    data() {
      return {
        target: '',
        changes: {},
        projects: {},
        localTarget: '',
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
        const { projects, states } = companyData;
        const defaultProjectName = Object.keys(projects)[0];
        const defaultProject = projects[defaultProjectName];
        const defaultProjectState = states[defaultProjectName];
        const { changes, 'proxy-target': proxyTarget, 'local-target': localTarget } = defaultProject;
        this.target = proxyTarget;
        this.localTarget = localTarget;
        this.changes = changes;
        this.projects = projects;
        this.latestSuccess = defaultProjectState;
      },
      updateChanges() {
        const companyName = this.$route.params.companyid;
        const projectName = this.$route.query.code;
        const companyData = this.$store.state.companies[companyName];
        const { projects, states } = companyData;
        const { changes, 'proxy-target': proxyTarget, 'local-target': localTarget } = projects[projectName];
        const projectState = states[projectName];
        this.localTarget = localTarget;
        this.changes = changes;
        this.target = proxyTarget;
        this.latestSuccess = projectState;
      },
      changeHead(latestHead) {
        this.latestSuccess = latestHead;
      },
      async changeProxy(target) {
        if (target) {
          const serverIp = process.env.NODE_ENV !== 'production' ? '10.10.1.10:3000' : '37.252.65.134:85';
          const { companyid, projectid } = this.$route.params;
          const { code } = this.$route.query;
          const request_options = {
            method:'put',
            headers: new Headers({
              'Content-Type':'application/json'
            }),
            body: JSON.stringify({ target })
          };
          const promise = await fetch(`http://${serverIp}/api/${companyid}/projects/${code}/proxy-target`, request_options)
          const result = await promise.json()
          if(result && result.msg === "success") {
            this.$store.dispatch('change_project_proxy', { companyid, projectCode: code, target })
          }
        }
      },
      getAvatarHQ(avatar) {
        return avatar.replace("32", "100");
      },
      openSnackbar() {
        this.$refs.snackbar.open();
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
