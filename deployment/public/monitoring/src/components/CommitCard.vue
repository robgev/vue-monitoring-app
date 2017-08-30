<template>
  <md-card :class="`commit-card ${open ? 'active' : ''}`">
    <md-card-header>
      <md-card-media class="avatar">
        <img :src="avatar" alt="People">
      </md-card-media>
      <md-card-header-text>
        <div class="md-title">Commit {{message}} by {{name}}</div>
        <div class="md-subhead">Commited on {{new Date(date).toLocaleString()}} Hash: {{hash}}</div>
      </md-card-header-text>
      <sync-button
        :hash="hash"
        :onSuccess="onSuccess"
        :latestSuccess="latestSuccess"
        tooltip="Checkout to this commit"
      />
    </md-card-header>
  </md-card>
</template>

<script>
  import SyncButton from './SyncButton';

  export default {
    components: {
      'sync-button': SyncButton
    },
    props: [
      'open',
      'name',
      'date',
      'hash',
      'avatar',
      'message',
      'onSuccess',
      'latestSuccess',
    ]
  }
</script>

<style lang="scss" scoped>
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
