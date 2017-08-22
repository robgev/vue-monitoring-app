<template>
  <div class='push-card-container'>
    <div @click="test">
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
    </div>
    <md-card v-for="commit in commits" :key="commit.hash" :class="`commit-card ${open ? 'active' : ''}`">
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
    methods: {
      test() {
        this.open = !this.open;
      }
    },
    data() {
      return {
        open: false
      }
    },
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
  height: 100%;
  margin: 15px;
  .avatar {
    margin-right: 20px;
  }
}

.commit-card {
  opacity: 0;
  height: 0;
  transition-property: height;
  transition-duration: .4s;
  transition-timing-function: cubic-bezier(.25,.8,.25,1);
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
  &.active {
    opacity: 1;
    margin: 20px 5% 0 5%;
    height: 100px;
  }
}
</style>
