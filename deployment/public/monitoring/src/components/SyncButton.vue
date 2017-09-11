<template>
  <div>
  <md-button
    @click="() => checkout(hash)"
    :disabled="isLoading || (hash === latestSuccess && (status === 'success' || status === null))"
    :class="`md-icon-button md-fab md-raised ${computedStatus || 'md-clean'}`"
  >
    <md-icon :class="`${isLoading ? 'animate' : ''}`">sync</md-icon>
    <md-tooltip md-direction="top">{{ tooltip }}</md-tooltip>
  </md-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      status: null,
      isLoading: false,
    }
  },
  props: [
    'hash',
    'tooltip',
    'topButton',
    'onSuccess',
    'latestSuccess',
  ],
  methods: {
    async checkout(hash) {
      // First, reset values
      this.status = null;
      this.isLoading = true;
      const { companyid, projectid } = this.$route.params;
      // const projectName = this.$route.query.code
      const body = hash ? { hash } : {};
      const request_options = {
        method:'post',
        headers: new Headers({
          'Content-Type':'application/json'
        }),
        body: JSON.stringify(body)
      };
      const serverIp = process.env.NODE_ENV !== 'production' ? '10.10.1.10:3000' : '37.252.65.134:85';
      const promise = await fetch(`http://${serverIp}/api/${companyid}/projects/${projectid}/syncup`, request_options)
      const result = await promise.json()
      if(result) {
        this.isLoading = false;
        this.status = result.msg;
      }
      if(result.msg === 'success') {
        const successCode = this.topButton ? 'latest' : hash; // if top button, then fetch all, till the latest available
        this.onSuccess(successCode);
      }
    }
  },
  computed: {
    computedStatus() {
      const { status, topButton, latestSuccess, hash } = this;
      if(topButton && latestSuccess === 'latest' && status === 'success') {
        return 'success' // If it's checked button and we sync-ed at least once, then it should be active
      }
      if(hash === latestSuccess && (status === 'success' || status === null)) {
        return 'success' // If hashes are matching and the status is success, then that's it
      }
      if(status === 'error') {
        return 'error'
      }
      return null
    },
  }
}
</script>

<style lang="scss" scoped>
.md-fab.md-raised {
  background-color: initial;
  color: initial;
  .animate {
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &.success {
    background-color: green;
    color: white;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  &.error {
    background-color: red;
    color: white;
    &:hover {
      color: black;
    }
  }
}
</style>
