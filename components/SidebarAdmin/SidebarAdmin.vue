<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <nuxt-link
      :to="'/dashboard'"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-text mx-3">Inicio</div>
    </nuxt-link>
    <hr class="sidebar-divider my-0" />
    <li class="nav-item active">
      <nuxt-link :to="'/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'undo-alt']" />
        <span>Volver a Cuarentime</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Tu Perfil</div>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/datos/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'id-badge']" />
        <span>Mis Datos</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/ventas/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'money-bill-alt']" />
        <span>Mis Ventas</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Tu Contenido</div>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/paquetes/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'box-open']" />
        <span>Nuevo Paquete</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/articulos/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'newspaper']" />
        <span>Nuevo Video</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/archivos/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'file-video']" />
        <span>Subir Archivos</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Tu Contenido</div>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/paquetes/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'box-open']" />
        <span>Mis Paquetes</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/articulos/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'newspaper']" />
        <span>Mis Articulos</span>
      </nuxt-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">Reportes</div>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/estadisticas/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'chart-pie']" />
        <span>Estadisticas</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/denuncias/'" class="nav-link">
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
@import "./sidebarAdmin.scss";
</style>