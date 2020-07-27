<template>
  <footer class="footer-mobile fixed-bottom">
    <div class="navbar-mobile-bottom">
      <ul>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/javs/1'">
            <font-awesome-icon :icon="['fab', 'youtube']" class="icon-sidebar" />
            <div class="title-sidebar">Javs</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/categories'">
            <font-awesome-icon :icon="['fas', 'layer-group']" class="icon-sidebar" />
            <div class="title-sidebar">Categories</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/idols/1'">
            <font-awesome-icon :icon="['fas', 'venus']" class="icon-sidebar" />
            <div class="title-sidebar">Idols</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/favorites/1'">
            <font-awesome-icon :icon="['fas', 'heart']" class="icon-sidebar" />
            <div class="title-sidebar">Favorites</div>
          </nuxt-link>
        </li>
        <li class="navbar-nav-link">
          <nuxt-link :to="'/history/1'">
            <font-awesome-icon :icon="['fas', 'history']" class="icon-sidebar" />
            <div class="title-sidebar">History</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMobile",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "./footer-mobile.scss";
</style>