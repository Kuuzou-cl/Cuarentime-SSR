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
          Cuarentime
        </nuxt-link>
        <div class="search-navbar">
          <div class="row width-fix">
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 text-center">
              <div class="row justify-content-center">
                <div class="input-group">
                  <input
                    @keyup.enter="search"
                    v-model="query"
                    name="query"
                    type="text"
                    class="form-control"
                    placeholder="Busca clases, consejos y más ..."
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
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 text-center">
              <ul>
                <li class="navbar-nav-link">
                  <nuxt-link :to="'/categorias'">
                    <font-awesome-icon :icon="['fas', 'layer-group']" class="icon-sidebar" />
                    <div class="title-sidebar">Categorías</div>
                  </nuxt-link>
                </li>
                <li class="navbar-nav-link">
                  <nuxt-link :to="'/packs'">
                    <font-awesome-icon :icon="['fas', 'box']" class="icon-sidebar" />
                    <div class="title-sidebar">Paquetes</div>
                  </nuxt-link>
                </li>
                <li class="navbar-nav-link">
                  <nuxt-link :to="'/articulos'">
                    <font-awesome-icon :icon="['fas', 'newspaper']" class="icon-sidebar" />
                    <div class="title-sidebar">Artículos</div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="log-navbar">
          <div class="row width-fix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <Login />
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <SignUp />
            </div>
            <div
              v-if="$store.state.token"
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
            >
              <nuxt-link to="/dashboard" tag="div" class="account">
                <img
                  src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/final-1.png"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from "~/components/LoginModal/Login";
import SignUp from "~/components/LoginModal/SignUp";
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
    };
  },
  components: {
    Login,
    SignUp,
  },
  methods: {
    search() {},
    async logout() {
      try {
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss">
@import "./navbar.scss";
</style>