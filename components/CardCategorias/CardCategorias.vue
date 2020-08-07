<template>
  <div class="card-body">
    <div class="container">
      <div class="row content-center">
        <div
          v-for="(categoria,index) in categorias"
          :key="index"
          class="col-lg-3 col-md-4 col-sm-5 col-xs-6"
        >
          <div :class="'card card-cat-0'+ (index+1)">
            <img class="card-img-top" :src="categoria.imagen" />
            <div class="card-body">
              <p class="card-text text-center">{{categoria.nombre}}</p>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="need-space"></div>
        </div>
      </div>
    </div>

    <div class="need-space"></div>
    <div class="row"></div>
  </div>
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