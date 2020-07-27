<template>
  <nav role="navbar navigation" class="navbar-expand-sm">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container">
      <div class="navbar-collapse main-navbar">
        <nuxt-link :to="'/'" class="heart" tag="div" type="button">
          <img src="https://javdata.sfo2.cdn.digitaloceanspaces.com/logo-short-02.png" />
        </nuxt-link>
        <div class="search-navbar">
          <div class="row width-fix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="input-group mb-3">
                <input
                  @keyup.enter="search"
                  v-model="query"
                  name="query"
                  type="text"
                  class="form-control"
                  placeholder="Search by code, idol or keyword ..."
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <font-awesome-icon
                      :icon="['fas', 'search']"
                      @click="search"
                      class="icon-search-navbar"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row width-fix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto text-center">
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
          </div>
        </div>
        <div class="log-navbar">
          <div class="row width-fix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto text-center">
              <nuxt-link to="/login" tag="div" class="signin" v-if="!$store.state.token">
                Sign In
                <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="icon-navbar" />
              </nuxt-link>
              <nuxt-link to="/dashboard" tag="div" class="signin" v-if="$store.state.token">
                Account
                <font-awesome-icon :icon="['fas', 'user-astronaut']" class="icon-navbar" />
              </nuxt-link>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mx-auto text-center">
              <div class="signin" v-if="$store.state.token" @click="logout()">
                Log Out
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon-navbar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      if (this.query) {
        var formatedQuery = this.query.replace(" ", "&");
        this.$router.replace("/search/1/" + formatedQuery);
        this.query = "";
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push({ path: "/" });
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>