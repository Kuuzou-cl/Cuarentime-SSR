<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <BannerCategorias />
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="card-video-default">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h4>Recetas en base a Pollo, #1 Pollo a la Mostaza</h4>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-12">
              <VideoPlayer />
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-12 text-right">
              <Rating :grade="3" :maxStars="5" :hasCounter="true" />
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-12"></div>
          </div>
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h4>Pollo a la mostaza</h4>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row">
                <div class="col-lg-12 text-center">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="comentario-paquete">
                <div class="row">
                  <div class="col-lg-4">
                    <h6>Manuel Palma</h6>
                  </div>
                  <div class="col-lg-8 text-center">
                    <p>Buen video men, +10 y a favoritos!</p>
                  </div>
                </div>
              </div>
              <div class="comentario-paquete">
                <div class="row">
                  <div class="col-lg-4">
                    <h6>Diego Aguero</h6>
                  </div>
                  <div class="col-lg-8 text-center">
                    <p>Muy rico, recomendable y facil de hacer</p>
                  </div>
                </div>
              </div>
              <div class="comentario-paquete">
                <div class="row">
                  <div class="col-lg-4">
                    <h6>Cristobal Carrion</h6>
                  </div>
                  <div class="col-lg-8 text-center">
                    <p>Un poco caro, pero buenas recetas</p>
                  </div>
                </div>
              </div>
              <div class="comentario-paquete">
                <div class="row">
                  <div class="col-lg-4">
                    <h6>Pablo Soto</h6>
                  </div>
                  <div class="col-lg-8 text-center">
                    <p>Un poco caro, pero buenas recetas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-12">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Ingresa tu comentario sobre la clase</span>
                </div>
                <textarea class="form-control"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
    </div>
  </div>
</template>
<script>
import BannerCategorias from "~/components/BannerCategorias/BannerCategorias.vue";
import VideoPlayer from "~/components/VideoPlayer/VideoPlayer.vue";
import CardPack02 from "~/components/Card/CardPack02.vue";
import Rating from "~/components/Rating/Rating.vue";
export default {
  components: {
    BannerCategorias,
    VideoPlayer,
    CardPack02,
    Rating,
  },
};
</script>
<style lang="scss">
</style>