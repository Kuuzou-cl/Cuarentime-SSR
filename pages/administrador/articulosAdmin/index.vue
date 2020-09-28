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
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-car">
              <div class="card shadow">
                <div class="card-body">
                  <div>
                    <div class="chartjs-size-monitor">
                      <div class="chartjs-size-monitor-expand">
                        <div class></div>
                      </div>
                      <div class="chartjs-size-monitor-shrink">
                        <div class></div>
                      </div>
                    </div>
                    <h4 class="card-tittle">Articulos por categorias</h4>
                    <mdb-container>
                      <mdb-pie-chart
                        data-labels
                        :data="pieChartData"
                        :options="pieChartOptions"
                        :width="600"
                        :height="300"
                      />
                    </mdb-container>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-6 grid-margin stretch-car">
              <div class="card shadow">
                <div class="card-body">
                  <div>
                    <div class="chartjs-size-monitor">
                      <div class="chartjs-size-monitor-expand">
                        <div class></div>
                      </div>
                      <div class="chartjs-size-monitor-shrink">
                        <div class></div>
                      </div>
                    </div>
                    <h4 class="card-tittle">Articulos por categorias</h4>
                    <mdb-container>
                      <mdb-pie-chart
                        data-labels
                        :data="pieChartData"
                        :options="pieChartOptions"
                        :width="600"
                        :height="300"
                      />
                    </mdb-container>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="need-space"></div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <h4>Ultimos Articulos Subidos</h4>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Titulo Articulo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(articulo,index) in articulos"
                  :key="index">
                    <td>{{index+1}}</td>
                    <td>{{articulo.id}}</td>
                    <td>{{buscadprNombreUsuario(articulo.usuario)}}</td>
                    <td>{{articulo.titulo}}</td>
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
import { mdbPieChart, mdbContainer } from "mdbvue";
import {
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
} from "mdbvue";
/* import { mdbPieChart, mdbContainer } from "mdbvue"; */
export default {
  layout: "superAdmin",
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
    mdbPieChart,
    mdbContainer,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
  },
  async asyncData({ store }) {
    let articulos;
    let usuarios;
    await store.dispatch("getArticulos").then((paq) => {
      articulos = paq;
    });
    await store.dispatch("getUsuarioAdmin").then((paq) => {
      usuarios = paq;
    });
    return {
      articulos: articulos,
      usuarios: usuarios,
    };
  },
  data() {
    return {
      pieChartData: {
        labels: ["Cocina", "Tecnologia", "Salud", "Deporte", "Economia"],
        datasets: [
          {
            data: [70, 30, 10, 40, 30],
            backgroundColor: [
              "rgba(53, 190, 224, 1)",
              "rgba(89, 73, 158, 1)",
              "rgba(92, 186, 71, 1)",
              "rgba(255, 110, 161, 1)",
              "rgba(133, 137, 239, 1)",
            ],
            hoverBackgroundColor: [
              "rgba(53, 190, 224, 1)",
              "rgba(89, 73, 158, 1)",
              "rgba(92, 186, 71, 1)",
              "rgba(255, 110, 161, 1)",
              "rgba(133, 137, 239, 1)",
            ],
          },
        ],
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: "white",
            align: "center",
            font: {
              size: 16,
            },
            formatter: (value) => {
              const [dataset] = this.pieChartData.datasets;
              const setValue = dataset.data.reduce((a, b) => a + b);

              return `${Math.round((value / setValue) * 100)}%`;
            },
          },
        },
      },
    };
  },
  methods: {
    buscadprNombreUsuario(idUser){
      for (let index = 0; index < this.usuarios.length; index++) {
        console.log(this.usuarios[index])
        if (idUser == this.usuarios[index].usuario) {
          return this.usuarios[index].nombre
        }
      }
      return "Nombre de Usuario no encontrado"
    }
  },
  computed: {},
};
</script>

<style lang="scss">
</style>