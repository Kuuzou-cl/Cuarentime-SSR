<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <a class="navbar-brand" href="/">
      <img src="~/assets/logo.png" width="120" height="80" alt="">
    </a>
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
      </div>
    </div>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/categorias">
            <font-awesome-icon :icon="['fas', 'layer-group']" class="icon-sidebar-navbar" />
            <div class="title-sidebar">Categorías</div>
          </a>
          
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/packs">
            <font-awesome-icon :icon="['fas', 'box']" class="icon-sidebar-navbar" />
            <div class="title-sidebar">Paquetes</div>
          </a>
          
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/articulos">
            <font-awesome-icon :icon="['fas', 'newspaper']" class="icon-sidebar-navbar" />
            <div class="title-sidebar">Artículos</div>
          </a>
          
        </li>

        <form class="form-inline">
          <button class="btn btn-sm btn-success" type="button"> <Login /></button>
        </form>
        <form class="form-inline">
          <button class="btn btn-sm btn-light" type="button"> <SignUp /></button>
        </form>
        <!-- <li class="nav-item active" >
          <Login />
        </li> -->

        <!-- <li class="nav-item active">
          <SignUp />
        </li> -->
      </ul>
      <div 
        v-if="$store.state.token"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <nuxt-link to="/dashboard" tag="div" class="account">
            <img
              src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/final-1.png"/>
          </nuxt-link>
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