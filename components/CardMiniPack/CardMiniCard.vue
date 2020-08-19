<template>
  <nuxt-link :to="'/packs/pack/'+id" tag="div" class="card card-pack">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-pack">
            <img
              :src="imagen"
              alt
            />
            <div class="img-pack-details"></div>
            <div class="img-pack-info">
              <div class="row">
                <div class="col-lg-3">
                  <img src="https://www.freeiconspng.com/uploads/price-icon-18.png" />
                </div>
                <div class="col-lg-2 text-center">
                  <div style="padding-top: 100%;">
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
        </div>
        <div class="col-lg-6">
          <h5 class="card-text text-center">{{titulo}}</h5>
          <p
            class="card-text text-center"
          >{{resumen}}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: String,
    titulo: String,
    resumen: String,
    precio: String,
    imagen: String,
  },
};
</script>

<style lang="scss">
</style>
