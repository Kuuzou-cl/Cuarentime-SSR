<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <BannerCategorias v-bind:categorias="categorias"/>
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
                class="row justify-content-center"
              >
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
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="col-post">
              <div class="head-col">
                <div class="row justify-content-center">
                  <h3>Últimos Paquetes</h3>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulo />
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
import BannerCategorias from "~/components/BannerCategorias/BannerCategorias.vue";
import CardPack from "~/components/Card/CardPack.vue";
import CardArticulo from "~/components/Card/CardArticulo.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    BannerCategorias,
    CardPack,
    CardArticulo,
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
  async asyncData({ app }) {
    let paquetes;
    let categorias;
    await app.$fireStore
      .collection("paquetes")
      .get()
      .then((querySnapshot) => {
        const paquetesReferencia = [];
        querySnapshot.forEach((doc) => {
          let paqueteReferencia = {};
          paqueteReferencia.id = doc.id;
          paqueteReferencia.imagen = doc.data().imagen;
          paqueteReferencia.precio = doc.data().precio;
          paqueteReferencia.titulo = doc.data().titulo;
          paqueteReferencia.resumen = doc.data().resumen;
          paquetesReferencia.push(paqueteReferencia);
        });
        paquetes = paquetesReferencia;
      });
    await app.$fireStore
      .collection("categorias")
      .get()
      .then((querySnapshot) => {
        const categoriasReferencia = [];
        querySnapshot.forEach((doc) => {
          let categoriaReferencia = {};
          categoriaReferencia.id = doc.id;
          categoriaReferencia.nombre = doc.data().nombre;
          categoriaReferencia.imagen = doc.data().imagen;
          categoriasReferencia.push(categoriaReferencia);
        });
        categorias = categoriasReferencia;
      });
    return {
      paquetes: paquetes.slice(0, 5),
      categorias: categorias.slice(0, 6),
    };
  },
  beforeCreate() {},
};
</script>

<style>
</style>