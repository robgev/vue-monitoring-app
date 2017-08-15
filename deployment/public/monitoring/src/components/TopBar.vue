<template>
  <md-toolbar class="md-dense">
    <div class="left" @click="back">back</div>
    <img class="header-logo" src="static/img/logo.svg" />
    <h2 class="md-title header-text">Monitoring</h2>
  </md-toolbar>
</template>

<script>
  export default {
    methods: {
      back() {
        window.history.back()
      }
    },
    props: {
      detailed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      console.log(this.detailed)
      return { det: this.detailed };
    }
  }
</script>

<style lang="scss" scoped>
  @import "..//assets/variables.scss";
  .md-dense {
    box-shadow: $material-shadow-3dp;
    .header-logo {
      max-height: 48px;
      padding-left: 3rem;
    }
    .header-text {
      margin-left: auto;
      padding-right: 4rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: large;
    }
  }

  .left {
    width: 40px;
    padding: 0 10px;
    cursor: pointer;
  }
</style>
