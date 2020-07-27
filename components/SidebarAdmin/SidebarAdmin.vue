<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <nuxt-link
      :to="'/dashboard'"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-text mx-3">Dashboard Home</div>
    </nuxt-link>
    <hr class="sidebar-divider my-0" />
    <li class="nav-item active">
      <nuxt-link :to="'/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'undo-alt']" />
        <span>Return to Website</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Manage Files</div>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/uploadFile/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" />
        <span>Upload Files</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">New Content</div>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/newJav/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>Add Video</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/newIdol/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>Add Idol</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/newCategory/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>Add Category</span>
      </nuxt-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">Data Center</div>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/editJavs/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>List Videos</span>
        <span>{{videos.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/editIdols/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>List Idols</span>
        <span>{{idols.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="'/dashboard/editCategories/'" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>List Categories</span>
        <span>{{categories.length}}</span>
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
  props: {
    videos: Array,
    categories: Array,
    idols: Array
  },
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push({ path: "/" });
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss">
@import "./sidebarAdmin.scss";
</style>