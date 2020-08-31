<template>
  <div>
    <div class="container-fluid-post">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <CardCategorias v-bind:categorias="categorias" />
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardCategorias from "~/components/CardCategorias/CardCategorias.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardCategorias,
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