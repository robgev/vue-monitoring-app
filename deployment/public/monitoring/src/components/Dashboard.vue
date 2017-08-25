<template>
  <page>
    <topbar slot="header" />
    <div>
      <h1 class="title">Projects</h1>
      <hr />
      <company-card
        v-for="company in companyCardData"
        :key="company.companyName"
        :company-name="company.companyName"
        :logo-url="company.logoUrl" />
    </div>
  </page>
</template>

<script>
  import { mapGetters } from 'vuex';

  import TopBar from './TopBar'
  import MainLayout from './MainLayout';
  import CompanyCard from './CompanyCard';

  export default {
    name: 'dashboard',

    computed: mapGetters([
      'companyCardData'
    ]),

    components: {
      'topbar': TopBar,
      'page': MainLayout,
      'company-card': CompanyCard,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0 10px;
  }

  a {
    color: #42b983;
  }

  hr {
    margin-bottom: 2rem;
  }

  .title {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
</style>
