<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <BannerCategorias />
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="col-post">
              <div class="head-col">
                <div class="row justify-content-center">
                  <h3>Últimos Paquetes</h3>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardPack />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="col-post">
              <div class="head-col">
                <div class="row justify-content-center">
                  <h3>Últimos Paquetes</h3>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BannerCategorias from "~/components/BannerCategorias/BannerCategorias.vue";
import CardPack from "~/components/Card/CardPack.vue";
import CardArticulo from "~/components/Card/CardArticulo.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    BannerCategorias,
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
  async asyncData() {
    return {};
  },
  beforeCreate() {},
};
</script>

<style>
</style>