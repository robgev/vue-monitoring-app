<template>
  <page>
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

  import CompanyCard from './CompanyCard';
  import MainLayout from './MainLayout';

  export default {
    computed: mapGetters([
      'companyCardData'
    ]),

    sockets: {
      connect() {
        console.log('socket connected')
      },

      push(data) {
      	console.log('Log ::: new message ::: ', data);
      }
    },

    name: 'hello',

    methods: {
      clickButton(e) {
          // $socket is socket.io-client instance
          this.$store.commit('increment');
          this.$socket.emit('emit_method', {msg: this.$store.state.count});
      }
    },

    mounted() {
      console.log(this.$store.state.companies.HanseaticSoft.logoUrl)
    },

    components: {
      'company-card': CompanyCard,
      'page': MainLayout,
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
