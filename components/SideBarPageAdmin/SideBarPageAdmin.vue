<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <li class="nav-item nav-profile border-bottom">
      <nuxt-link :to="'/administrador/datosAdmin/'" class="nav-link flex-column">
        <div>
          <img
          src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/final-1.png" style="width: 97%"
        />
        </div>
        <div class="need-space"></div>
        <div class="font-weight-semibold mb-1 .t2 text-center">
          Juan Sepulveda Acevedo
        </div>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider my-0" />
    <li class="nav-item active">
      <nuxt-link :to="'/administrador'" class="nav-link">
        <span>Resumen</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Tu Perfil</div>
    <li class="nav-item">
      <nuxt-link :to="'/administrador/datosAdmin/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'id-badge']" />
        <span>Mis Datos</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Contenido</div>
    <li class="nav-item">
      <nuxt-link :to="'/administrador/paquetesAdmin/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'box-open']" />
        <span>Paquetes</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/administrador/articulosAdmin/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'newspaper']" />
        <span>Articulos</span>
      </nuxt-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">Reportes</div>
    <li class="nav-item">
      <nuxt-link :to="'/administrador/estadisticas/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'chart-pie']" />
        <span>Estadisticas</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/administrador/denuncias/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'flag']" />
        <span>Denuncias</span>
      </nuxt-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle" @click="logout()">
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon-navbar" />
      </button>
    </div>
  </ul>
</template>

<script>
export default {
  name: "SidebarAdmin",
  props: {},
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        this.$router.push({ path: "/" });
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss">
@import "./SideBarPageAdmin.scss";
</style>