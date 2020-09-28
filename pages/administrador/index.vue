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
              <div class="card shadow ">
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
          <div class="need-space"></div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <h3>Ultimos Paquetes</h3>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Videos</th>
                    <th scope="col">Resumen</th>
                    <th scope="col">Aprobado por</th>
                    <th scope="col">Categoría</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(paquete,index) in paquetes"
                  :key="index">
                    <th>{{index+1}}</th>
                    <td>{{buscadprNombreUsuario(paquete.usuario)}}</td>
                    <td>{{paquete.titulo}}</td>
                    <td>{{paquete.resumen}}</td>
                    <td>{{paquete.aprobado}}</td>
                    <td>{{buscadprNombreCategoria(paquete.categoria)}}</td>
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
import SideBarPageAdmin from "~/components/SideBarPageAdmin/SideBarPageAdmin.vue";
import { mdbBarChart, mdbContainer } from "mdbvue";
export default {
  layout: "superAdmin",
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
    mdbBarChart,
    mdbContainer,
    
  },
  async asyncData({ store }) {
    let paquetes;
    let usuarios;
    let categorias;
    await store.dispatch("getPaquetesSubidos").then((paq) => {
      paquetes = paq;
    });
    await store.dispatch("getUsuarioAdmin").then((paq) => {
      usuarios = paq;
    });
    await store.dispatch("getCategorias").then((paq) => {
      categorias = paq;
    });
    return {
      paquetes: paquetes,
      usuarios: usuarios,
      categorias: categorias,
    };
  },
  data() {
    return {
      barChartData: {
        labels: ["Cocina", "Tecnologia", "Salud", "Deporte", "Economia"],
        datasets: [
          {
            label: "Paquetes",
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
          {
            label: "Articulos",
            data: [9, 25, 6, 2, 8],
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
    },
    buscadprNombreCategoria(idCategoria){
      for (let index = 0; index < this.categorias.length; index++) {
        console.log(this.categorias[index])
        if (idCategoria == this.categorias[index].id) {
          return this.categorias[index].nombre
        }
      }
      return "Categoria no encontrada"
    },
    buscadprNombreAdmin(idAdmin){
      for (let index = 0; index < this.usuarios.length; index++) {
        console.log(this.usuarios[index])
        if (idAdmin == this.usuarios[index].usuario) {
          return this.usuarios[index].nombre
        }
      }
      return "Paquete no aprobado"
    },
  },
  computed: {},
};
</script>

<style lang="scss">
</style>