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
              <h2>Mis Datos</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center">
              <div class="col-profile">
                <div class="row">
                  <div class="col-lg-10 text-center">
                    <h3>Juan Sepulveda Acevedo</h3>
                  </div>
                  <div class="col-lg-2 text-center">
                    <button class="btn btn-secondary" @click="editProfile">Editar</button>
                  </div>
                </div>
                <div class="need-space"></div>
                <img
                  src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/final-1.png"
                />
                <div class="need-space"></div>
                <div class="need-space"></div>
                <div class="need-space"></div>
                <div class="need-space"></div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Nombre</span>
                  </div>
                  <input type="text" class="form-control" v-model="nombre" :disabled="disabled" />
                </div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Correo</span>
                  </div>
                  <input type="text" class="form-control" v-model="correo" :disabled="disabled" />
                </div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Teléfono</span>
                  </div>
                  <input type="text" class="form-control" v-model="telefono" :disabled="disabled" />
                </div>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Edad</span>
                  </div>
                  <input type="text" class="form-control" v-model="edad" :disabled="disabled" />
                </div>
                
                <div class="need-space"></div>
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
export default {
  layout: "superAdmin",
  name: "Dashboard",
  components: {
    SideBarPageAdmin,
  },
  data() {
    return {
      nombre: "Juan Sepulveda Acevedo",
      telefono: "+56 9 87531245",
      edad: "27",
      correo: "administrador@cuarentime.test",
      disabled: true,
    };
  },
  async asyncData() {
    return {};
  },
  methods: {
    editProfile() {
      if (this.disabled) {
        this.disabled = !this.disabled;
      } else {
        this.disabled = !this.disabled;
      }
    },
    editBanco() {
      if (this.disabledBanco) {
        this.disabledBanco = !this.disabledBanco;
      } else {
        this.disabledBanco = !this.disabledBanco;
      }
    },
  },
};
</script>

<style lang="scss">
</style>