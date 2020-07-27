<template>
  <div id="app">
    <Sitemap v-if="$device.isDesktop"/>
    <Navbar v-if="$device.isDesktop"/>
    <NavbarMobile v-if="$device.isMobileOrTablet" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Sitemap from '~/components/Sitemap/Sitemap.vue';
import Navbar from '~/components/Navbar/Navbar.vue';
import NavbarMobile from '~/components/NavbarMobile/NavbarMobile.vue';
import Secondarybar from '~/components/Secondarybar/Secondarybar.vue';
import Footer from '~/components/Footer/Footer.vue';
export default {
  components: {
    Sitemap,Navbar,NavbarMobile,Secondarybar,Footer
  }
}
</script>

<style lang="scss">
@import "../assets/base-style.scss";
</style>
