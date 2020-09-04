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
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Pollo con arroz</td>
                    <td>@mdo</td>
                    <td>Juan Sepulveda Acevedo</td>
                    <td>Cocina</td>
                    <td>Aprobada</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>Futbol</td>
                    <td>@fat</td>
                    <td>Juan Sepulveda Acevedo</td>
                    <td>Deporte</td>
                    <td>Aprobada</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Larry</td>
                    <td>Limpiar PC</td>
                    <td>@twitter</td>
                    <td>Juan Sepulveda Acevedo</td>
                    <td>Tecnologia</td>
                    <td>Aprobada</td>
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
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-car">
              <div class="card">
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
                    <h4 class="card-tittle">Categorias</h4>
                    <mdb-container>
                      <mdb-bar-chart
                        :data="barChartData"
                        :options="barChartOptions"
                        :width="600"
                        :height="400"
                      ></mdb-bar-chart>
                    </mdb-container>
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
import SideBarPageAdmin from "~/components/SideBarPageAdmin/SideBarPageAdmin.vue";
import { mdbBarChart, mdbContainer } from "mdbvue";
/* import { mdbPieChart, mdbContainer } from "mdbvue"; */
export default {
  layout: "admin",
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
    mdbBarChart,
    mdbContainer,
    /* mdbPieChart,
    mdbContainer, */
  },
  data() {
    return {
      barChartData: {
        labels: ["Cocina", "Tecnologia", "Salud", "Deporte", "Economia"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              "rgba(53, 190, 224, 0.2)",
              "rgba(89, 73, 158, 0.2)",
              "rgba(92, 186, 71, 0.2)",
              "rgba(255, 110, 161, 0.2)",
              "rgba(133, 137, 239, 0.2)",
            ],
            borderColor: [
              "rgba(53, 190, 224, 1)",
              "rgba(89, 73, 158, 1)",
              "rgba(92, 186, 71, 1)",
              "rgba(255, 110, 161, 1)",
              "rgba(133, 137, 239, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          ],
        },
      },
    };
    /* return {
      pieChartData: {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [
          {
            data: [200, 50, 100, 40, 120],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
            ],
          },
        ],
      },
      pieChartOptions: {
        responsive: false,
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
    }; */
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
</style>