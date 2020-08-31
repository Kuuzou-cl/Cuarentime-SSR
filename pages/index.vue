<template>
  <div>
    <div class="container-fluid-post">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <BannerCategorias v-bind:categorias="categorias" />
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="col-post">
              <div class="head-col">
                <div class="row justify-content-center">
                  <h3>Últimos Paquetes</h3>
                </div>
              </div>
              <div class="need-space"></div>
              <div
                v-for="(paquete,index) in paquetes"
                :key="index"
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              >
                <div class="row justify-content-around">
                  <div class="col-miniPostHome col col-lg-11 col-md-10 col-sm-10 col-xs-10">
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
                <div class="need-space"></div>
              </div>
              <div class="need-space"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="col-post">
              <div class="head-col">
                <div class="row justify-content-center">
                  <h3>Últimos Paquetes</h3>
                </div>
              </div>
              <div class="need-space"></div>
              <div
                v-for="(articulo, index) in articulos"
                :key="index"
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
              >
                <div class="row justify-content-around">
                  <div class="col-miniPostHome col col-lg-11 col-md-10 col-sm-10 col-xs-10">
                    <div class="need-space"></div>
                    <div class="row justify-content-center">
                      <CardMiniArticulosHome v-bind:articulo="articulo" />
                    </div>
                  </div>
                </div>
                  <div class="need-space"></div>
                  <div class="need-space"></div>
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
  </div>
</template>

<script>
import axios from "axios";
import BannerCategorias from "~/components/BannerCategorias/BannerCategorias.vue";
import CardPack from "~/components/Card/CardPack.vue";
import CardMiniArticulosHome from "~/components/CardArticulos/CardMiniArticuloHome.vue";
import CardMiniPackHome from "~/components/CardPack/CardMiniPack.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    BannerCategorias,
    CardPack,
    CardMiniArticulosHome,
    CardMiniPackHome,
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
    let articulos;
    await store.dispatch("getArticulos").then((paq) => {
      articulos = paq;
    });
    await store.dispatch("getPaquetes").then((paq) => {
      paquetes = paq;
    });
    let categorias;
    await store.dispatch("getCategorias").then((cat) => {
      categorias = cat;
    });
    return {
      paquetes: paquetes.slice(0, 5),
      categorias: categorias.slice(0, 6),
      articulos: articulos,
    };
  },
  beforeCreate() {},
};
</script>

<style>
</style>