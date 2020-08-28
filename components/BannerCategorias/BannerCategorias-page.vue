<template>
  <!-- <nuxt-link :to="'/categorias/01'" tag="div"> -->
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="(categoria,index) in categorias"
          :key="index"
          class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
        >
          <div :class="'card card-cat-0'+ (index+1)">
            <nuxt-link :to="'/categorias/01'" tag="div">
              <img
                class="card-img-top"
                :src="categoria.imagen"
              />
              <div class="card-body">
                <p class="card-text text-center">{{categoria.nombre}}</p>
              </div>
            </nuxt-link> 
          </div>
        </div>
      </div>
    </div>
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  props: {
    categorias: Array,
  },
};
</script>

<style lang="scss">
</style>