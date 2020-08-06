<template>
  <div>
    <div class="need-space"></div>
    <div class="need-space"></div>
    <BannerCategorias v-bind:categorias="categorias" />
    <div class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
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
                  <button class="btn btn-info float-right">
                    Agregar al Carro
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
                      <nuxt-link :to="'/packs/pack/01/video/01'" tag="button" class="btn btn-info">
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
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BannerCategorias from "~/components/BannerCategorias/BannerCategorias.vue";
import VideoPlayer from "~/components/VideoPlayer/VideoPlayer.vue";
import CardPack02 from "~/components/Card/CardPack02.vue";
export default {
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  name: "",
  components: {
    BannerCategorias,
    VideoPlayer,
    CardPack02,
  },
  data() {
    return {
    };
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
    let auth = true;
    if (paquete.usuario == store.state.token) {
      auth = false;
    }
    if (store.state.paquetesComprados.some(item => item == id)) {
      auth = false;
    }    
    return {
      categorias: categorias,
      paquete: paquete,
      auth: auth,
      comentarios: paquete.comentarios,
    };
  },
  beforeCreate() {},
  methods: {
    comprar() {
      if (this.comprado) {
        this.comprado = !this.comprado;
      } else {
        this.comprado = !this.comprado;
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss">
</style>