<template>
  <div id="app-mobile">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/NavbarMobile/NavbarMobile.vue';
import Footer from '~/components/FooterMobile/FooterMobile.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style-mobile.scss";
</style>
