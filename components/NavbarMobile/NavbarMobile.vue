<template>
  <nav class="nav-mobile">
    <div class="row justify-content-center fix-width mx-auto">
      <div class="icon-mobile">
        <nuxt-link :to="'/'" class="heart-mobile" type="button">
          <img src="https://javdata.sfo2.cdn.digitaloceanspaces.com/favi-j4.png" />
        </nuxt-link>
      </div>
      <div class="search-mobile">
          <input
            @keyup.enter="search"
            v-model="query"
            name="query"
            type="text"
            class="form-control"
            placeholder="Search by code, idol or keyword ..."
          />
          <font-awesome-icon :icon="['fas', 'search']" @click="search" class="icon-search-navbar" />
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMobile",
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
    }
  }
};
</script>

<style lang="scss">
@import "./navbar-mobile.scss";
</style>