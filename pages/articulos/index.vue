<template>
    <div class="container-fluid-post">
      <div class="need-space"></div>
      <div class="wdgt widget_categorias">
        <div class="tirulo_categorias">
          <h6>Categorias</h6>
        </div>
        <form action="">
          <select name="cat" id="cat" class="postform">
            <option value="-1">Elegir categoria</option>
            <option value="0">Cocina</option>
            <option value="1">Tecnologia</option>
            <option value="2">Salud</option>
            <option value="3">Deporte</option>
            <option value="4">Economia</option>
          </select>
        </form>
      </div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="Tittle_pag">
          <h3>Listado de articulos</h3>
          <hr width=100% align="center">
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div v-for="(articulo, index) in articulos"
            :key="index" class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="row content-center">
            <div  class="col-miniPost">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardMiniArticulos
                  v-bind:articulo="articulo"/>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="need-space"></div>
        </div> 
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="need-space"></div>
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