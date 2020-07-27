<template>
  <div class="secondarybar">
    <div class="container height-fix">
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
    </div>
  </div>
</template>

<script>
export default {
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
@import "./secondarybar.scss";
</style>