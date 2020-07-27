<template>
  <div v-if="$device.isDesktop" class="crumbs-content">
    <div class="container">
      <nuxt-link
        v-for="(page, id) in this.$store.state.breadCrumbs"
        :key="id"
        :to="'/' + page.route"
      >{{page.show}}/   </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs"
};
</script>

<style lang="scss">
@import "./Breadcrumbs.scss";
</style>