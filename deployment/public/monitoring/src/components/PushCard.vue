<template>
  <div class='push-card-container'>
    <md-card md-with-hover>
      <md-card-header>
        <md-card-media class="avatar">
          <img :src="avatar" alt="People">
        </md-card-media>
        <md-card-header-text>
          <div class="md-title">{{name}} pushed to repo {{repo}} - {{message}}</div>
          <div class="md-subhead">On {{new Date(date).toLocaleString()}}</div>
        </md-card-header-text>
      </md-card-header>
      <md-ink-ripple></md-ink-ripple>
    </md-card>
    <md-card v-for="commit in commits" :key="commit.hash" class="commit-card">
      <md-card-header>
        <md-card-media class="avatar">
          <img :src="commit.author.avatar" alt="People">
        </md-card-media>
        <md-card-header-text>
          <div class="md-title">Commit {{commit.message}} by {{commit.author.name}}</div>
          <div class="md-subhead">Commited on {{new Date(commit.date).toLocaleString()}} Hash: {{commit.hash}}</div>
        </md-card-header-text>
        <md-button class="md-fab md-clean" title="Checkout to this commit">
          <md-icon>sync</md-icon>
        </md-button>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
  export default {
    props: [
      'name',
      'repo',
      'message',
      'date',
      'avatar',
      'commits',
    ]
  }
</script>

<style lang="scss" scoped>
.push-card-container {
  margin: 15px;
  .avatar {
    margin-right: 20px;
  }
}

.commit-card {
  margin: 20px 5% 0 5%;
  .md-card-header {
    align-items: center;
    .md-title {
      margin-top: 0 !important;
    }
  }
  .avatar {
    height: 50px;
    img {
      height: 50px;
      width: auto;
    }
  }
}
</style>
