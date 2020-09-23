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
            <div class="col-lg-6 grid-margin stretch-car">
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
                    <h4 class="card-tittle">Aprobación de paquetes</h4>
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
            <div class="col-lg-6 grid-margin stretch-car">
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
                    <h4 class="card-tittle">Paquetes por categorias</h4>
                    <mdb-container>
                      <mdb-horizontal-bar-chart
                        :data="horizontalBarChartData"
                        :options="horizontalBarChartOptions"
                        :width="700"
                        :height="300"
                      ></mdb-horizontal-bar-chart>
                    </mdb-container>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <h4>Ultimos Paquetes Subidos</h4>
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Titulo Paquete</th>
                    <th scope="col">precio</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(paquete,index) in paquetes"
                :key="index">
                    <td>{{index+1}}</td>
                    <td>{{paquete.id}}</td>
                    <td>{{paquete.usuario}}</td>
                    <td>{{paquete.titulo}}</td>
                    <td>{{paquete.precio}}</td>
                    <td>
                      <nuxt-link class="btn" :to="'/administrador/paquetesAdmin/'+paquete.id">Ver</nuxt-link>
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
import { mdbPieChart, mdbContainer, mdbHorizontalBarChart } from "mdbvue";
export default {
  layout: "superAdmin",
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
    mdbPieChart,
    mdbContainer,
    mdbHorizontalBarChart,
  },
   async asyncData({ store }) {
    let paquetes;
    await store.dispatch("getPaquetesNoAprobados").then((paq) => {
      paquetes = paq;
    });
    return {
      paquetes: paquetes,
    };
  },
  data() {
    return {
      pieChartData: {
        labels: ["Aprovados", "Rechazados"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["#5CBA47", "#F7464A"],
            hoverBackgroundColor: ["#5CBA47", "#F7464A"],
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
      horizontalBarChartData: {
        labels: ["Cocina", "Tecnologia", "Salud", "Deporte", "Economia"],
        datasets: [
          {
            label: "Paquetes",
            data: [12, 19, 3, 5, 6],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      horizontalBarChartOptions: {
        responsive: false,
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
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
</style>