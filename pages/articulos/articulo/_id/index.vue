<template>
  <div>
    <div class="container-fluid-post">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
          <div class="row content-center">
          <div  
          class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <div class="card-articulo-default justify-content-center">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos
                v-bind:articulo="articulo"/>
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
import CardArticulos from "~/components/CardArticulos/CardArticulos.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardArticulos,
  },
  data() {
    return {};

  },
  head() {
    return {
      tittle: "",
      meta: [
        {
          name: "description",
          content:"",
        },
      ],
    };
  },

  async asyncData({ store, params }) {
    let articulo;
    let id = params.id;
    if (id == null || id == "") {
        id = ";"
    }
    await store.dispatch("getArticulo",{id:id}).then((art) => {
      articulo = art;
    });
    return { 
        id: id,
        articulo: articulo };
  },

  beforeCreate() {},
};
</script>

<style>
</style>