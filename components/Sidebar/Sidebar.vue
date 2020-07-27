<template>
  <div class="side-navbar sticky-top">
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
    </ul>
    <div class="underline-sidebar"></div>
    <ul>
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
      <li v-if="$store.state.authUser" class="navbar-nav-link">
        <nuxt-link :to="'/dashboard'">
          <font-awesome-icon :icon="['fas', 'edit']" class="icon-sidebar" />
          <div class="title-sidebar">Dashboard</div>
        </nuxt-link>
      </li>
      <li v-if="$store.state.authUser" @click="logout()" class="navbar-nav-link">
        <nuxt-link to="/">
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon-sidebar" />
          <div class="title-sidebar">Log Out</div>
        </nuxt-link>
      </li>
    </ul>
    <div class="underline-sidebar"></div>
    <ul>
      <li class="navbar-nav-link">
        <a href="https://www.hentai4free.watch/">
          <font-awesome-icon :icon="['fas', 'carrot']" class="icon-sidebar" />
          <div class="title-sidebar">Hentai4free</div>
        </a>
      </li>
      <li class="navbar-nav-link">
        <a href="https://www.vrporn4free.watch/">
          <font-awesome-icon :icon="['fas', 'vr-cardboard']" class="icon-sidebar" />
          <div class="title-sidebar">VR Porn</div>
        </a>
      </li>
      <li>
        <a href="https://www.3dporn4free.watch/">
          <font-awesome-icon :icon="['fab', 'unity']" class="icon-sidebar" />
          <div class="title-sidebar">Animation Porn</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss">
@import "./sidebar.scss";
</style>