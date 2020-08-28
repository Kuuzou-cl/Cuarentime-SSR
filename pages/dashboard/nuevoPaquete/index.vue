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
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav02">Categoria del paquete</label>
                      <input
                        v-model="categoria.nombre"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Selecciona categoria del paquete"
                        disabled="disabled"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputJav02">Videos del paquete</label>
                      <div class="col-lg-12">
                        <div class="tableFixHead">
                          <table class="table table-hover text-center">
                            <tbody>
                              <tr v-for="(video, key) in videos" :key="key">
                                <th>{{video.titulo}}</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
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
            <div class="col-lg-4">
              <div class="row">
                <div class="col-lg-12">
                  <h3>Videos</h3>
                  <div class="tableFixHead">
                    <table class="table table-hover text-center">
                      <tbody>
                        <tr v-for="(file, key) in files" :key="key">
                          <th @click="selectFile(file.id, file.titulo)">{{file.titulo}}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="row">
                <h3>Categorias</h3>
                <div class="col-lg-12">
                  <div class="tableFixHead">
                    <table class="table table-hover text-center">
                      <tbody>
                        <tr v-for="(categoria, key) in categorias" :key="key">
                          <th
                            @click="selectCategoria(categoria.id, categoria.nombre)"
                          >{{categoria.nombre}}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
      precio: "",
      descripcion: "",
      videos: [],
      categoria: {},
    };
  },
  async asyncData({ store }) {
    let files = [];
    await store.dispatch("getMisVideos").then((res) => {
      files = res;
    });
    let categorias = [];
    await store.dispatch("getCategorias").then((res) => {
      categorias = res;
    });
    return {
      files: files,
      categorias: categorias,
    };
  },
  methods: {
    async postPaquete() {
      let paquete = {
        aprobado: "",
        categoria: this.categoria.id,
        comentarios: [],
        imagen: "",
        precio: this.precio,
        previsualizacion: "https://www.youtube.com/watch?v=-P28LKWTzrI",
        publicacion: "",
        publicado: false,
        resumen: this.descripcion,
        titulo: this.nombre,
        videos: this.videos,
      };
      await this.$store
        .dispatch("postPaquete", { paquete: paquete })
        .then((response) => {
          this.$router.push({ path: "/dashboard" });
        });
    },
    selectFile(_id, titulo) {
      const exist = this.videos.find((obj) => obj.id === _id);
      if (exist) {
        for (var i = 0; i < this.videos.length; i++) {
          if (this.videos[i].id === _id) {
            this.videos.splice(i, 1);
            i--;
          }
        }
      } else {
        this.videos.push({ id: _id, titulo: titulo });
      }
    },
    selectCategoria(_id, nombre) {
      if (this.categoria.id === _id) {
        this.categoria = {}
      } else {
        this.categoria = { id: _id, nombre: nombre };
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss">
</style>