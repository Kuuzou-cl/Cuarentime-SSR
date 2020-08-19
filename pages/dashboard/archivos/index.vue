<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="row">
            <div class="title-admin">
              <h2>Sube tus archivos</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div class="custom-file">
                <input
                  class="custom-file-input"
                  type="file"
                  id="javs"
                  ref="javs"
                  multiple
                  v-on:change="handleFilesUploadJavs()"
                />
                <label class="custom-file-label" for="javs">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'file-video']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Carpeta de Videos</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div class="custom-file mb-3">
                <input
                  class="custom-file-input"
                  type="file"
                  id="covers"
                  ref="covers"
                  multiple
                  v-on:change="handleFilesUploadCovers()"
                />
                <label class="custom-file-label" for="covers">
                  <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                      <div class="col-12 mx-auto">
                        <div class="row justify-content-center">
                          <font-awesome-icon :icon="['fas', 'photo-video']" class="icon-upload" />
                        </div>
                        <br />
                        <div class="row justify-content-center">
                          <h6>Carpeta de Imagenes</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">{{this.progress}}</div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
              <button class="btn btn-upload-admin" v-on:click="clearFiles()">
                Limpiar Archivos
                <font-awesome-icon :icon="['fas', 'eraser']" />
              </button>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
              <button class="btn btn-upload-admin" v-on:click="submitFiles()">
                Subir Archivos
                <font-awesome-icon :icon="['fas', 'upload']" />
              </button>
            </div>
          </div>
          <div class="need-space"></div>
          <div class="container container-admin">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul class="nav nav-tabs">
                  <li class="nav-item" @click="changeJavTab">
                    <a class="nav-link" :class="javTab">Videos</a>
                  </li>
                  <li class="nav-item" @click="changeCoverTab">
                    <a class="nav-link" :class="coverTab">Imagenes</a>
                  </li>
                </ul>
                <table class="table table-hover" v-if="this.javTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in javs" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileJavs( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover" v-if="this.coverTab == 'active'">
                  <tbody>
                    <tr v-for="(file, key) in covers" :key="key">
                      <td class="text-center">{{file[0].name}}</td>
                      <td class="text-center">{{formatBytes(file[0].size)}}</td>
                      <td class="text-center">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated bg-jav4free"
                          role="progressbar"
                          :aria-valuenow="file[1]"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          :style="{'width': `${(100)}%`}"
                        >{{file[1]}}%</div>
                      </td>
                      <td class="text-center">
                        <span v-on:click="removeFileCovers( key )">
                          Remove
                          <font-awesome-icon :icon="['fas', 'minus-circle']" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import SidebarAdmin from "~/components/SidebarAdmin/SidebarAdmin.vue";
export default {
  layout: "admin",
  name: "uploadFile",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      javs: [],
      covers: [],
      idols: [],
      vtts: [],
      sprites: [],
      progress: 0,
      javTab: "active",
      idolTab: "",
      coverTab: "",
      vttTab: "",
      spriteTab: "",
      isUploading: false
    };
  },
  async asyncData() {
    return {
    };
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav);
  },
  beforeRouteLeave(to, from, next) {
    if (this.uploading) {
      if (!window.confirm("Leave without finish uploads?")) {
        return;
      }
    }
    next();
  },
  computed: {
    uploading() {
      if (
        this.javs.length > 0 ||
        this.covers.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    preventNav(event) {
      if (!this.uploading) return;
      event.preventDefault();
      event.returnValue = "";
    },
    formatBytes(a, b = 2) {
      if (0 === a) return "0 Bytes";
      const c = 0 > b ? 0 : b,
        d = Math.floor(Math.log(a) / Math.log(1024));
      return (
        parseFloat((a / Math.pow(1024, d)).toFixed(c)) +
        " " +
        ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
      );
    },
    clearFiles() {
      this.javs = [];
      this.covers = [];
    },
    changeJavTab() {
      if (this.javTab != "active") {
        this.javTab = "active";
        this.coverTab = "";
      }
    },
    changeCoverTab() {
      if (this.coverTab != "active") {
        this.javTab = "";
        this.coverTab = "active";
      }
    },
    submitFiles() {
      this.submitJavs();
      this.submitCovers();
    },
    submitJavs() {
      this.javs.forEach(async (file, index) => {
        await this.$store.dispatch("uploadFiles", { file: file }).then((response) => {
          
        });
      });
    },
    handleFilesUploadJavs() {
      let uploadedFiles = this.$refs.javs.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let jav = [uploadedFiles[i], 0];
        this.javs.push(jav);
      }
    },
    removeFileJavs(key) {
      this.javs.splice(key, 1);
    },
    submitCovers() {
      this.covers.forEach((file, index) => {

      });
    },
    handleFilesUploadCovers() {
      let uploadedFiles = this.$refs.covers.files;
      for (var i = 0; i < uploadedFiles.length; i++) {
        let cover = [uploadedFiles[i], 0];
        this.covers.push(cover);
      }
    },
    removeFileCovers(key) {
      this.covers.splice(key, 1);
    },
  }
};
</script>

<style lang="scss">
</style>