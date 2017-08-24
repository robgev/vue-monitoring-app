<template>
  <div class='push-card-container'>
    <div @click="toggle">
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
    <commit-card
      v-for="commit in commits"
      :key="commit.hash"
      :open="open"
      :name="commit.author.name"
      :message="commit.message"
      :date="commit.date"
      :avatar="commit.author.avatar"
      :hash="commit.hash"
      :latestSuccess="latestSuccess"
      :onSuccess="onSuccess"
    />
  </div>
</template>

<script>
  import CommitCard from './CommitCard';

  export default {
    components: {
      'commit-card': CommitCard,
    },
    methods: {
      toggle() {
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
      'date',
      'avatar',
      'message',
      'commits',
      'onSuccess',
      'latestSuccess',
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
</style>
