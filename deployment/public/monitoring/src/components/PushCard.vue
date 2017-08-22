<template>
  <md-card style="margin: 20px;">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{name}} pushed to repo {{repo}}</div>
        <div class="md-subhead">{{message}} on {{new Date(date).toLocaleString()}}</div>
      </md-card-header-text>

      <md-card-media>
        <img :src="avatar" alt="People">
      </md-card-media>
    </md-card-header>
  </md-card>
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
