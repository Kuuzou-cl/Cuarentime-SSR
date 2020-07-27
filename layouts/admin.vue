<template>
  <div class="container-fluid fluid-full body-admin">
    <nuxt/>
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>

<style lang="scss">
@import "../assets/base-style-admin.scss";
</style>
