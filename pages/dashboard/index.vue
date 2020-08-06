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
              <h2>Inicio</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <h4>Ultimos Paquetes Aprobados</h4>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Videos</th>
                    <th scope="col">Comentarios</th>
                    <th scope="col">Aprobado por</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Publicación</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(paquete,index) in paquetes" :key="index">
                    <th scope="row">1</th>
                    <td>{{paquete.titulo}}</td>
                    <td>{{paquete.videos.length}}</td>
                    <td>{{paquete.comentarios.length}}</td>
                    <td>{{paquete.aprobado}}</td>
                    <td>
                      <button type="button" class="btn btn-warning" disabled>Cocina</button>
                    </td>
                    <td>{{paquete.publicacion}}</td>
                    <td>
                      <button type="button" class="btn btn-info">Editar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <h4>Ultimas Ventas</h4>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Paquete</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Publicación</th>
                    <th scope="col">Comprador</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Julio 28, 2020</th>
                    <td>Recetas en base a Pollo</td>
                    <td>2,600</td>
                    <td>
                      <button type="button" class="btn btn-warning" disabled>Cocina</button>
                    </td>
                    <td>Julio 5, 2020</td>
                    <td>@CristobalComprador</td>
                  </tr>
                </tbody>
              </table>
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
  name: "Dashboard",
  components: {
    SidebarAdmin,
  },
  async asyncData({ store }) {
    let paquetes;
    await store.dispatch("getMisPaquetes").then((paq) => {
      paquetes = paq;
    });
    return {
      paquetes: paquetes,
    };
  },
  methods: {
  },
  computed: {},
};
</script>

<style lang="scss">
</style>