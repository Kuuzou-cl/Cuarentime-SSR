<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="input-group">
        <input
          @keyup.enter="search"
          v-model="query"
          name="query"
          type="text"
          class="form-control-articulo"
          placeholder="Buscar tema"
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
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row content-center">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="col-post">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="col-post">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="col-post">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="col-post">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="col-post">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="col-post">
              <div class="need-space"></div>
              <div class="row justify-content-center">
                <CardArticulos />
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
import CardArticulos from "~/components/CardArticulos/CardArticulos.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardArticulos,
  },

  beforeCreate() {},
};
</script>

<style>
</style>