<template>
  <div id="app">
    <div class="wrap_error">
      <NuxtLink to="/">
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <p class="link_error">Back to Home</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style lang="scss" scoped>
#app {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #121212;
}
.wrap_error {
  background: linear-gradient(to right, #fe9aec, #33ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 900;
  }
  a {
    color: inherit;
  }
  .link_error {
    font-size: 25px;
    font-weight: 500;
  }
}
</style>
