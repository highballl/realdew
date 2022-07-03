<template>
  <div class="wrap_error">
    <v-app dark>
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/">Back to Home</NuxtLink>
    </v-app>
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
.wrap_error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::v-deep .v-application--wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to right, #fe9aec, #33ccff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    a {
      color: inherit;
    }
  }
}

h1 {
  font-size: 20px;
}
</style>
