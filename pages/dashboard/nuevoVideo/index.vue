<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="row">
            <div class="title-admin">
              <h2>Nuevo Video</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <div class="container container-admin">
                <div class="row justify-content-center">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav01">Titulo del Video</label>
                      <input
                        v-model="nombre"
                        class="input-admin"
                        id="inputJav01"
                        placeholder="Ingresar titulo del video"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav02">Duracion del video</label>
                      <input
                        v-model="duracion"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Ingresar duracion aproximada del video"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav02">Descripcion del video</label>
                      <input
                        v-model="descripcion"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Ingresar descripcion del video"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="container">
                <div class="row justify-content-center">
                  <button class="btn category-admin" @click="postVideo()">Agregar Video</button>
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
import SidebarAdmin from "~/components/SidebarAdmin/SidebarAdmin.vue";
export default {
  layout: "admin",
  name: "nuevoVideo",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      nombre: "",
      duracion: "",
      descripcion: "",
    };
  },
  async asyncData() {
    return {};
  },
  methods: {
    async postVideo() {
        let video = {};
      await this.$store
        .dispatch("postVideo", { video: video })
        .then((response) => {
          this.$router.push({ path: "/dashboard" });
        });
    },
  },
  computed: {},
};
</script>

<style lang="scss">
</style>