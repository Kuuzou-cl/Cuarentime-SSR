<template>
  <div>
    <div v-if="!comprado" class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <BannerCategorias />
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
                  <h4>Recetas en base a Pollo</h4>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row">
                <div class="col-lg-12 text-center">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <button class="btn btn-info float-left" @click="comprar">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                  </button>
                  <button class="btn btn-info float-right">
                    Agregar al Carro
                    <font-awesome-icon :icon="['fas', 'shopping-basket']" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-6">
              <CardPack02 />
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
        </div>
      </div>
      <div class="need-space"></div>
    </div>
    <div v-if="comprado" class="container-fluid">
      <div class="need-space"></div>
      <div class="need-space"></div>
      <BannerCategorias />
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
                  <h4>Recetas en base a Pollo</h4>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row">
                <div class="col-lg-12 text-center">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <button class="btn btn-info float-left" @click="comprar">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row">
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
      comprado: false,
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
  async asyncData({ params }) {
    return {};
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