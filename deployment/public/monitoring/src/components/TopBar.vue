<template>
  <md-toolbar class="md-dense topbar">
    <div v-if="detailed" class="detailed">
      <div class="left" @click="back">
        <md-icon class="icon">arrow_back</md-icon>
      </div>
      <md-tabs @change="onTabChange" style="width: calc(100vw - 4rem)" ref="tabs">
        <md-tab
          v-for="tab in items"
          :key="tab.id"
          :id="tab.id"
          :md-label="tab.tabLabel"
          :md-options="{code: tab.code}">
        </md-tab>
      </md-tabs>
    </div>
    <img v-if="!detailed" class="header-logo" src="static/img/logo.svg" />
    <h2 v-if="!detailed" class="md-title header-text">Monitoring</h2>
  </md-toolbar>
</template>

<script>
  export default {
    methods: {
      back() {
        window.history.back()
      },
      onTabChange(idx) {
        const allTabs = this.$refs.tabs.$children;
        const currentTab = allTabs[idx + 1]; // First child is ink ripple which we try to avoid
        const { id: currentID, mdOptions: { code } } = currentTab
        this.$router.replace({name: 'projectPage', params: { projectid: currentID }, query: { code }})
      }
    },
    data() {
      const companyName = this.$route.params.companyid;
      const companyData = this.$store.state.companies && companyName ? this.$store.state.companies[companyName] : [];
      const { projects } = companyData;
      return {
        items: projects,
      }
    },
    props: {
      detailed: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "..//assets/variables.scss";
  .md-dense {
    padding: 0;
    box-shadow: $material-shadow-3dp;
    .header-logo {
      max-height: 48px;
      padding-left: 1rem;
    }
    .header-text {
      margin-left: auto;
      padding-right: 2rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: large;
    }
    &.topbar {
      height: 2vh;
    }
  }
  .detailed {
    display: flex;
    align-items: center;
    .left {
      padding-left: 2rem;
      cursor: pointer;
    }
  }
</style>
