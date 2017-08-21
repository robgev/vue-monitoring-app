<template>
  <page detailed>
    <div>
      <md-whiteframe md-elevation="3" class="changes-container">
        <div style="height: 75px; display: flex; justify-content: space-between">
          <span class="md-display-3" style="text-transform: capitalize; font-weight: 900">{{this.$route.params.projectid}}</span>
          <md-button class="md-fab md-clean" title="Sync with master">
            <md-icon>sync</md-icon>
          </md-button>
        </div>
        <hr style="margin: 10px" />
        <div class="scrollbar">
          <md-card style="margin: 20px;">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{changes[0].push.author.name}} pushed to repo {{changes[0].push.repo}}</div>
                <div class="md-subhead">{{changes[0].push.message}} on {{new Date(changes[0].push.date).toLocaleString()}}</div>
              </md-card-header-text>

              <md-card-media>
                <img :src="changes[0].push.author.avatar" alt="People">
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card style="margin: 20px;">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{changes[0].push.author.name}} pushed to repo {{changes[0].push.repo}}</div>
                <div class="md-subhead">{{changes[0].push.message}} on {{new Date(changes[0].push.date).toLocaleString()}}</div>
              </md-card-header-text>

              <md-card-media>
                <img :src="changes[0].push.author.avatar" alt="People">
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card style="margin: 20px;">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{changes[0].push.author.name}} pushed to repo {{changes[0].push.repo}}</div>
                <div class="md-subhead">{{changes[0].push.message}} on {{new Date(changes[0].push.date).toLocaleString()}}</div>
              </md-card-header-text>

              <md-card-media>
                <img :src="changes[0].push.author.avatar" alt="People">
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card style="margin: 20px;">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{changes[0].push.author.name}} pushed to repo {{changes[0].push.repo}}</div>
                <div class="md-subhead">{{changes[0].push.message}} on {{new Date(changes[0].push.date).toLocaleString()}}</div>
              </md-card-header-text>

              <md-card-media>
                <img :src="changes[0].push.author.avatar" alt="People">
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card style="margin: 20px;">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{changes[0].push.author.name}} pushed to repo {{changes[0].push.repo}}</div>
                <div class="md-subhead">{{changes[0].push.message}} on {{new Date(changes[0].push.date).toLocaleString()}}</div>
              </md-card-header-text>

              <md-card-media>
                <img :src="changes[0].push.author.avatar" alt="People">
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card style="margin: 20px;">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{changes[0].push.author.name}} pushed to repo {{changes[0].push.repo}}</div>
                <div class="md-subhead">{{changes[0].push.message}} on {{new Date(changes[0].push.date).toLocaleString()}}</div>
              </md-card-header-text>

              <md-card-media>
                <img :src="changes[0].push.author.avatar" alt="People">
              </md-card-media>
            </md-card-header>
          </md-card>
          <md-card style="margin: 20px;">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{changes[0].push.author.name}} pushed to repo {{changes[0].push.repo}}</div>
                <div class="md-subhead">{{changes[0].push.message}} on {{new Date(changes[0].push.date).toLocaleString()}}</div>
              </md-card-header-text>

              <md-card-media>
                <img :src="changes[0].push.author.avatar" alt="People">
              </md-card-media>
            </md-card-header>
          </md-card>
        </div>
      </md-whiteframe>
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

<style lang="scss" scoped>
.changes-container {
  height: 90vh;
  border-radius: 9px;
  padding: 15px;
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
