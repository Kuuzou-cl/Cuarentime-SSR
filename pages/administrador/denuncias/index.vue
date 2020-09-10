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
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <h4>Ultimas Denuncias de Articulos</h4>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre denunciante</th>
                    <th scope="col">Mombre denunciado</th>
                    <th scope="col">Titulo Articulo</th>
                    <th scope="col">Razón</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Matias</td>
                    <td>Cocinar arroz</td>
                    <td>no habla sobre el titulo del articulo</td>
                    <td>
                      <select name="" id="">
                        <option value="0">Seleccione una opcion</option>
                        <option value="1">Aprobar</option>
                        <option value="2">Reprobar</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>Eduardo</td>
                    <td>Covid-19</td>
                    <td>Información falsa</td>
                    <td>
                      <select name="" id="">
                        <option value="0">Seleccione una opcion</option>
                        <option value="1">Aprobar</option>
                        <option value="2">Reprobar</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Larry</td>
                    <td>Jose</td>
                    <td>Formatear</td>
                    <td>Se explica muy mal</td>
                    <td>
                      <select name="" id="">
                        <option value="0">Seleccione una opcion</option>
                        <option value="1">Aprobar</option>
                        <option value="2">Reprobar</option>
                      </select>
                    </td>
                  </tr>

                  <!-- <tr v-for="(paquete,index) in paquetes" :key="index">
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
                  </tr>-->
                </tbody>
              </table>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="need-space"></div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <h4>Ultimas Denuncias de Paquetes</h4>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre denunciante</th>
                    <th scope="col">Mombre denunciado</th>
                    <th scope="col">Titulo Paquete</th>
                    <th scope="col">Razón</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Matias</td>
                    <td>Cocinar arroz</td>
                    <td>no habla sobre el titulo del articulo</td>
                    <td>
                      <select name="" id="">
                        <option value="0">Seleccione una opcion</option>
                        <option value="1">Aprobar</option>
                        <option value="2">Reprobar</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>Eduardo</td>
                    <td>Covid-19</td>
                    <td>Información falsa</td>
                    <td>
                      <select name="" id="">
                        <option value="0">Seleccione una opcion</option>
                        <option value="1">Aprobar</option>
                        <option value="2">Reprobar</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Larry</td>
                    <td>Jose</td>
                    <td>Formatear</td>
                    <td>Se explica muy mal</td>
                    <td>
                      <select name="" id="">
                        <option value="0">Seleccione una opcion</option>
                        <option value="1">Aprobar</option>
                        <option value="2">Reprobar</option>
                      </select>
                    </td>
                  </tr>

                  <!-- <tr v-for="(paquete,index) in paquetes" :key="index">
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
                  </tr>-->
                </tbody>
              </table>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="need-space"></div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SideBarPageAdmin from "~/components/SideBarPageAdmin/SideBarPageAdmin.vue";
import {
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
} from "mdbvue";
export default {
  layout: "admin",
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
  },

  methods: {},
  computed: {},
};
</script>

<style lang="scss">
</style>