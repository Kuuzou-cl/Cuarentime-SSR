<template>
  <div>
    <!-- <BannerCategorias v-bind:categorias="categorias" /> -->
    <div class="container-fluid-post">
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
                  <h4>{{ this.paquete.titulo }}</h4>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="row">
                <div class="col-lg-12 text-center">
                  <p>{{ this.paquete.resumen }}</p>
                </div>
              </div>
              <div v-if="auth" class="row">
                <div class="col-lg-12">
                  <button
                    class="btn btn-info float-right"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Comprar
                    <font-awesome-icon :icon="['fas', 'shopping-basket']" />
                  </button>
                  <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" data-dismiss="modal">
                            &times;
                          </button>
                          <h4 class="modal-title">Cuarentime</h4>
                        </div>
                        <div class="modal-body">
                          <p>
                            ¡Descarga nuestra APP para realizar esta compra!
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                v-for="(comentario, index) in comentarios"
                :key="index"
                class="comentario-paquete"
              >
                <div class="row">
                  <div class="col-lg-4">
                    <h6>{{ comentario.usuario }}</h6>
                  </div>
                  <div class="col-lg-8 text-center">
                    <p>{{ comentario.comentario }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="!auth">
            <div class="col-lg-6">
              <div
                v-for="(comentario, index) in comentarios"
                :key="index"
                class="comentario-paquete"
              >
                <div class="row">
                  <div class="col-lg-4">
                    <h6>{{ comentario.usuario }}</h6>
                  </div>
                  <div class="col-lg-8 text-center">
                    <p>{{ comentario.comentario }}</p>
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
  </div>
</template>

<script>
import axios from "axios";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
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
  beforeCreate() {},
  methods: {
    async comprar() {
      let apiKey = "6B2007FC-671E-4A3C-A843-326LDDF9410F";
      let secretKey = "4e34c141e847d71141e3d542d30ffd8d3932e8e9";

      let subject = "PagoPruebaWeb";
      let currency = "CLP";
      let amount = "5000";
      let email = "carlobernucci@gmail.com";
      let commerceOrder = "918272121";
      let uriCrearPago = "https://sandbox.flow.cl/api/payment/create";
      let uriObtenerEstadoPago =
        "https://sandbox.flow.cl/api/payment/getStatus";
      let urlConfirmation = "linkConfirmation";
      let urlReturn = "linkReturn";

      let parametrosOrdenados =
        "amount" +
        amount +
        "apiKey" +
        apiKey +
        "commerceOrder" +
        commerceOrder +
        "email" +
        email +
        "subject" +
        subject +
        "urlConfirmation" +
        urlConfirmation +
        "urlReturn" +
        urlReturn;

      const sign = hmacSHA256(parametrosOrdenados, secretKey).toString();
      console.log(sign);

      let response = await axios
        .post(
          uriCrearPago +
            "?amount=" +
            amount +
            "&apiKey=" +
            apiKey +
            "&commerceOrder=" +
            commerceOrder +
            "&email=" +
            email +
            "&subject=" +
            subject +
            "&urlConfirmation=" +
            urlConfirmation +
            "urlReturn=" +
            urlReturn +
            "&s=" +
            sign,
          {
            amount: amount,
            apiKey: "6B2007FC-671E-4A3C-A843-326LDDF9410F",
            commerceOrder: commerceOrder,
            email: email,
            subject: subject,
            urlConfirmation: urlConfirmation,
            urlReturn: urlReturn,
            s: sign,
          }
        )
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    auth() {
      let auth = true;
      if (this.paquete.usuario == this.$store.state.token) {
        auth = false;
      }
      if (this.$store.state.paquetesComprados.some((item) => item == this.id)) {
        auth = false;
      }
      return auth;
    },
  },
};
</script>

<style lang="scss">
</style>