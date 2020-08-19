<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="search-post">
          <div class="row width-fix">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
              <div class="row justify-content-center">
                <div class="input-group">
                  <input
                    @keyup.enter="search"
                    v-model="query"
                    name="query"
                    type="text"
                    class="form-control"
                    placeholder="Buscar Articulo"
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
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row content-center">
          <div v-for="(articulo, index) in articulos"
          :key="index" 
          class="col-lg-6 col-md-2 col-sm-4 col-xs-4">
          <div class="need-space"></div>
          <h3>Listado de articulos</h3>
          <hr width=203% align="center">
          <div class="need-space"></div>

            <div class="col-miniPost">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardMiniArticulos
                v-bind:articulo="articulo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardMiniArticulos from "~/components/CardArticulos/CardMiniArticulo.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardMiniArticulos,
  },

  async asyncData({ store }) {
    let articulos;
    await store.dispatch("getArticulos").then((paq) => {
      articulos = paq;
    });
    return { articulos: articulos };
  },

  beforeCreate() {},
};
</script>

<style>
</style>