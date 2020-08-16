<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row content-center">
          <div v-for="(articulo, index) in articulos"
          :key="index" 
          class="col-lg-11 col-md-9 col-sm-9 col-xs-9">
            <div class="col-articulo justify-content-center">
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