<template>
  <div class="container-fluid-post">
    <div class="need-space"></div>
    <div class="wdgt widget_categorias">
      <div class="tirulo_categorias">
        <div class="need-space"></div>
        <!-- <h6>Categorias</h6> -->
      </div>
      <form action>
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
        <h3>Listado de Paquetes</h3>
        <hr width="100%" align="center" />
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="row">
        <div v-for="(paquete, index) in paquetes" :key="index" class="columna col-lg-6">
          <div class="col-miniPost col col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
    <div class="need-space"></div>
    <div class="need-space"></div>
    <div class="need-space"></div>
  </div>
</template>

<script>
import axios from "axios";
import CardPack from "~/components/Card/CardPack.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardPack,
  },
  head() {
    return {
      meta: [
        {
          name: "description",
          content: "",
        },
      ],
    };
  },
  async asyncData({ store }) {
    let paquetes;
    await store.dispatch("getPaquetes").then((paq) => {
      paquetes = paq;
    });
    return {
      paquetes: paquetes.slice(0, 5),
    };
  },
  beforeCreate() {},
};
</script>

<style>
</style>