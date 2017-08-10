<template>
  <md-toolbar class="md-dense">
    <img class="header-logo" src="static/img/logo.svg" />
    <h2 class="md-title header-text">Monitoring</h2>
  </md-toolbar>
</template>

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
</style>
