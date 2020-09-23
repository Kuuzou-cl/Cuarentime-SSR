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
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >Categorias</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{categorias.length}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >Articulos</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{articulos.length}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >Paquetes</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{paquetes.length}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >Usuarios</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{usuarios.length}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 grid-margin stretch-car">
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
                    <h4 class="card-tittle">Subidas por meses</h4>
                    <mdb-container>
                      <mdb-line-chart
                        :data="lineChartData"
                        :options="lineChartOptions"
                        :width="1030"
                        :height="400"
                      ></mdb-line-chart>
                    </mdb-container>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 grid-margin stretch-car">
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
                    <h4 class="card-tittle">Categorias con más archivos</h4>
                    <mdb-container>
                      <mdb-pie-chart
                        data-labels
                        :data="pieChartData"
                        :options="pieChartOptions"
                        :width="450"
                        :height="400"
                      />
                    </mdb-container>
                  </div>
                </div>
              </div>
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
import { mdbLineChart, mdbContainer, mdbPieChart } from "mdbvue";

export default {
  layout: "superAdmin",
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
    mdbLineChart,
    mdbContainer,
    mdbPieChart,
  },
  async asyncData({ store }) {
    let paquetes;
    let articulos;
    let usuarios;
    let categorias;
    await store.dispatch("getArticulos").then((paq) => {
      articulos = paq;
    });
    await store.dispatch("getPaquetes").then((paq) => {
      paquetes = paq;
    });
    await store.dispatch("getUsuarios").then((paq) => {
      usuarios = paq;
    });
    await store.dispatch("getCategorias").then((paq) => {
      categorias = paq;
    });
    return {
      paquetes: paquetes,
      articulos: articulos, 
      usuarios: usuarios,
      categorias: categorias
    };
  },
  data() {
    return {
      lineChartData: {
        labels: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        datasets: [
          {
            label: "Paquetes",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [6, 5, 8, 8, 5, 5, 4, 6, 5, 8, 8, 5],
          },
          {
            label: "Articulos",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: [2, 4, 4, 1, 8, 2, 9, 2, 4, 4, 1, 8],
          },
        ],
      },
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
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
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
</style>