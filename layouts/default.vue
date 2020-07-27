<template>
  <div id="app">
    <Navbar v-if="$device.isDesktop"/>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar/Navbar.vue';
import Footer from '~/components/Footer/Footer.vue';
export default {
  components: {
    Navbar,Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
