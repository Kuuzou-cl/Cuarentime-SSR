<template>
  <div id="wrapper">
    <SideBarPageAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="row">
            <div class="title-admin">
              <h2>Administrador</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container-fluid">
          <div class="container">
            <div class="card-pack-default">
              <div class="row">
                <div class="col-lg-6">
                  <VideoPlayer />
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-12 text-center">
                      <h4>{{this.paquete.titulo}}</h4>
                    </div>
                  </div>
                  <div class="need-space"></div>
                  <div class="row">
                    <div class="col-lg-12 text-center">
                      <p>{{this.paquete.resumen}}</p>
                    </div>
                  </div>
                  <div v-if="auth" class="row">
                    <div class="col-lg-12">
                      <button class="btn btn-info float-right" @click="comprar()">
                        Comprar
                        <font-awesome-icon :icon="['fas', 'shopping-basket']" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row" v-if="auth">
                <div class="col-lg-6">
                  <CardPack02 />
                </div>
                <div class="col-lg-6">
                  <div
                    v-for="(comentario,index) in comentarios"
                    :key="index"
                    class="comentario-paquete"
                  >
                    <div class="row">
                      <div class="col-lg-4">
                        <h6>{{comentario.usuario}}</h6>
                      </div>
                      <div class="col-lg-8 text-center">
                        <p>{{comentario.comentario}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-if="!auth">
                <div class="col-lg-6">
                  <div
                    v-for="(comentario,index) in comentarios"
                    :key="index"
                    class="comentario-paquete"
                  >
                    <div class="row">
                      <div class="col-lg-4">
                        <h6>{{comentario.usuario}}</h6>
                      </div>
                      <div class="col-lg-8 text-center">
                        <p>{{comentario.comentario}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Clase</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Duración</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">#1</th>
                        <td>Pollo Arvejado</td>
                        <td>10 min</td>
                        <td>
                          <nuxt-link
                            :to="'/packs/pack/01/video/01'"
                            tag="button"
                            class="btn btn-info"
                          >
                            <font-awesome-icon :icon="['fas', 'play']" />
                          </nuxt-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
import VideoPlayer from "~/components/VideoPlayer/VideoPlayer.vue";
import CardPack02 from "~/components/Card/CardPack02.vue";
import SideBarPageAdmin from "~/components/SideBarPageAdmin/SideBarPageAdmin.vue";

export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
    VideoPlayer,
    CardPack02,
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "",
      meta: [
        {
          name: "description",
          content: "",
        },
      ],
    };
  },
  async asyncData({ params, store }) {
    let categorias;
    await store.dispatch("getCategorias").then((cat) => {
      categorias = cat;
    });
    let id = params.id;
    if (id == null || id == "") {
      id = "";
    }
    let paquete;
    await store.dispatch("getPaquete", { id: id }).then((paq) => {
      paquete = paq;
    });
    return {
      id: id,
      categorias: categorias,
      paquete: paquete,
      comentarios: paquete.comentarios,
    };
  },
};
</script>

<style>
</style>