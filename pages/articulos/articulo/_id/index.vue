<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row content-center">
          <div v-for="(articulo, index) in articulos"
          :key="index" 
          class="col-lg-10 col-md-4 col-sm-4 col-xs-4">
            <div class="col-post">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos
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
import CardArticulos from "~/components/CardArticulos/CardArticulos.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardArticulos,
  },

  async asyncData({ store, params }) {
    let articulos;
    await store.dispatch("getArticulos").then((paq) => {
      articulos = paq;
    });
    let id = params.id;
    if (id == null || id == "") {
        id = ";"
    }
    return { 
        id: id,
        articulos: articulos };
  },

  beforeCreate() {},
};
</script>

<style>
</style>