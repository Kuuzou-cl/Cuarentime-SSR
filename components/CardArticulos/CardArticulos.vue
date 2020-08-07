<template>
  <nuxt-link :to="'/articulos/articulo/01'" tag="div" class="card card-articulo">
    <div class="card-body">
      <div class="row">
        <div class="card-articulo-title">
          <div class="row">
            <div class="col-lg-6">
              <h5 class="card-text">{{articulo.titulo}}</h5>
            </div>
            <div class="need_space"></div>
            <div class="col-lg-3">
              <font-awesome-icon :icon="['fas', 'calendar-alt']" class="icon-sidebar" />{{articulo.duracion}}
            </div>
            <div class="col-lg-3">
              <font-awesome-icon :icon="['fas', 'book-reader']" class="icon-sidebar" />Leer Ahora
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row">
        <div class="col-lg-4 text-center">
          <p>{{articulo.usuario}}</p>
          <img
            src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/final-1.png"
          />
        </div>
        <div class="col-lg-8">
          <h6>descripción:</h6>
          <p
            class="card-text text-center"
          >{{articulo.contenido}}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props:{
    articulo: Object,
  }
};
</script>

<style lang="scss">
</style>