<template>
  <div>
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <div class="card">
              <img class="card-img-top" src alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Cocina</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <div class="card">
              <img class="card-img-top" src alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Manualidades</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <div class="card">
              <img class="card-img-top" src alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Cultura</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <div class="card">
              <img class="card-img-top" src alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Música</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <div class="card">
              <img class="card-img-top" src alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Estudios</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <div class="card">
              <img class="card-img-top" src alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Interesante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="col-post">
              <div class="row justify-content-center">
                <h3>Últimos Paquetes</h3>
              </div>
              <div class="row"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="col-post">
              <div class="row justify-content-center">
                <h3>Últimos Paquetes</h3>
              </div>
              <div class="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardJav from "../components/Cards/CardJav00";
import CardJavMobile from "../components/Cards/CardJav00Mobile";
import CardIdol from "../components/Cards/CardIdol00";
import CardIdolMobile from "../components/Cards/CardIdol00Mobile";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {
    CardJav,
    CardIdol,
    CardJavMobile,
    CardIdolMobile,
  },
  head() {
    return {
      meta: [
        {
          name: "description",
          content: "J",
        },
      ],
    };
  },
  async asyncData() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("addCrumb", { page: "Home", route: "" });
  },
};
</script>

<style>
</style>