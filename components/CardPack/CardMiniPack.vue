<template>
  <nuxt-link :to="'/packs/pack/'+id" tag="div" class="card card-pack">
    <div class="card" style="height: 20rem width: 10rem;">
      <div class="img-pack">
        <div class="img-pack-details"></div>
        <div class="img-pack-info">
          <div class="row">
            <div class="col-lg-3">
              <img src="https://www.freeiconspng.com/uploads/price-icon-18.png" />
            </div>
            <div class="col-lg-2 text-center">
              <div class="precio" style="padding-top: 40%;">
                <p>{{precio}}</p>
              </div>
            </div>
            <div class="col-lg-7 text-center">
              <h6>{{titulo}}</h6>
              <p>Por Jaime Sepulveda</p>
            </div>
          </div>
        </div>
      </div>
      <img class="card-img-top" :src="imagen" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{titulo}}</h5>
        <p class="card-text text-center">{{limitadorCaracter()}}</p>
        <p class="card-text">{{resumen}}</p>
        <a href class="btn btn-primary">Ir al paquete</a>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    paquete: Object,
  },
  methods: {
    limitadorCaracter() {
      return this.paquete.resumen.substring(0, 500) + "...";
    },
  },
};
</script>

<style lang="scss">
</style>
