<template>
  <md-card md-with-hover class="card">
    <router-link :to="{name: 'project', params: { companyid: companyName }}">
      <md-card-media-cover>
        <md-card-media md-ratio="4:3">
          <img :src="logoUrl" alt="People">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <div class="md-title">{{ companyName }}</div>
          </md-card-header>
        </md-card-area>
        <md-ink-ripple></md-ink-ripple>
      </md-card-media-cover>
    </router-link>
  </md-card>
</template>

<script>
export default {
  name: 'company-card',
  props: ['companyName', 'logoUrl'],
}
</script>

<style lang="scss" scoped>
@import "..//assets/variables.scss";

.md-card {
  box-shadow: $material-shadow-5dp;
}

.card {
  display: flex;
  width: 400px;
  height: 300px;
  text-align: center;
}

</style>
