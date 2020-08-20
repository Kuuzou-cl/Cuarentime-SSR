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
                    placeholder="Buscar Paquete"
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
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"> 
            <div class="need-space"></div>
            <h3>Listado de Paquetes</h3>
            <hr width=203% align="center">
            <div class="need-space"></div> 
            <div class="col-miniPost">
              <div class="need-space"></div>
              <div class="need-space"></div>
              <div class="need-space"></div>
              <div class="head-col">                               
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
import CardPack from "~/components/Card/CardPack.vue";
import CardArticulo from "~/components/Card/CardArticulo.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
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