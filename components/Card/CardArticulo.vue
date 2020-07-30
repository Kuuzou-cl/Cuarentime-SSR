<template>
  <nuxt-link :to="'/articulos/articulo/01'" tag="div" class="card card-articulo">
    <div class="card-body">
      <div class="row">
        <div class="card-articulo-title">
          <div class="row">
            <div class="col-lg-6">
              <h5 class="card-text">Recetas en base a Pollo</h5>
            </div>
            <div class="col-lg-2">
              <font-awesome-icon :icon="['fas', 'clock']" class="icon-sidebar" />15 min
            </div>
            <div class="col-lg-2">
              <font-awesome-icon :icon="['fas', 'calendar-alt']" class="icon-sidebar" />Julio 25
            </div>
            <div class="col-lg-2">
              <font-awesome-icon :icon="['fas', 'play-circle']" class="icon-sidebar" />Ver Ahora
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row">
        <div class="col-lg-4 text-center">
          <p>Raul Acevedo</p>
          <img
            src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/final-1.png"
          />
        </div>
        <div class="col-lg-8">
          <p
            class="card-text text-center"
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>