<template>
  <div>
    <div class="container-fluid-post">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="Tittle_pag">
          <h3>Listado de articulos</h3>
          <hr width=100% align="center">
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="row">
          <div v-for="(articulo, index) in articulos"
            :key="index" class="columna col-lg-6">
            <div  class="col-miniPost col col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardMiniArticulos
                  v-bind:articulo="articulo"/>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container-fluid">        
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container-fluid">
          <div class="Tittle_pag">
            <h3>Listado de Paquetes</h3>
            <hr width=100% align="center">
          </div>
          <div class="need-space"></div>
          <div class="need-space"></div>
          <div class="row">
            <div v-for="(paquete, index) in paquetes"
              :key="index" class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div class="row content-center">
                <div  class="col-miniPost">
                  <div class="need-space"></div>
                  <div class="need-space"></div>
                  <div class="need-space"></div>
                  <div class="need-space"></div>
                  <div class="row justify-content-center">
                    <CardPack
                      v-bind:id="paquete.id"
                      v-bind:titulo="paquete.titulo"
                      v-bind:resumen="paquete.resumen"
                      v-bind:precio="paquete.precio"
                      v-bind:imagen="paquete.imagen"
                    /> 
                  </div>
                </div>
              </div>
            </div> 
          </div> 
        </div>      
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardMiniArticulos from "~/components/CardArticulos/CardMiniArticulo.vue";
import CardPack from "~/components/Card/CardPack.vue";
import CardArticulo from "~/components/Card/CardArticulo.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardMiniArticulos,
    CardPack,
    CardArticulo,
  },

  async asyncData({ store }) {
    let articulos;
    let paquetes;
    await store.dispatch("getArticulos").then((paq) => {
      articulos = paq;
    });
    await store.dispatch("getPaquetes").then((paq) => {
      paquetes = paq;
    });
    return { 
        articulos: articulos,
        paquetes: paquetes.slice(0, 5),
    };
  },

  beforeCreate() {},
};
</script>

<style>
</style>