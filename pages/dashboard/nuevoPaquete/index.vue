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
              <h2>Nuevo Paquete</h2>
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
                      <label for="inputJav01">Titulo del Paquete</label>
                      <input
                        v-model="nombre"
                        class="input-admin"
                        id="inputJav01"
                        placeholder="Ingresar titulo del paquete"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav02">Precio del paquete</label>
                      <input
                        v-model="precio"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Ingresar precio del paquete"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav02">Resumen del paquete</label>
                      <input
                        v-model="descripcion"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Ingresar resumen del paquete"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="container">
                <div class="row justify-content-center">
                  <button class="btn category-admin" @click="postPaquete()">Agregar Paquete</button>
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
    async postPaquete() {
      let paquete = {};
      await this.$store
        .dispatch("postPaquete", { paquete: paquete })
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