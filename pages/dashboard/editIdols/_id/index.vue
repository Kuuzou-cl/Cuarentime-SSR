<template>
  <div id="wrapper">
    <SidebarAdmin v-bind:videos="javs" v-bind:idols="idols" v-bind:categories="categories" />
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <div class="row">
            <div class="title-admin">
              <h2>Overview</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="container container-admin">
                <div class="row justify-content-center">
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <img :src="idol.imageUrl" />
                  </div>
                  <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                    <div class="row">
                      <label for="inputJav04">Idol Name</label>
                      <input
                        v-model="idol.name"
                        class="input-admin"
                        id="inputJav04"
                        placeholder="Enter new idol name"
                      />
                    </div>
                    <div class="row">
                      <label for="inputJav04">Idol Image Url</label>
                      <input
                        v-model="idol.imageUrl"
                        class="input-admin"
                        id="inputJav04"
                        placeholder="Enter new image url"
                      />
                    </div>
                    <div class="row justify-content-center">
                      <button class="btn category-admin" @click="updateIdol()">Update Idol</button>
                    </div>
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
import SidebarAdmin from "~/components/SidebarAdmin/SidebarAdmin.vue";
export default {
  layout: "admin",
  name: "editIdol",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      idol: null
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    let javs = await axios
      .get("https://jav.souzou.dev/jav4free/javs/")
      .catch(e => {
        console.log(e);
      });
    let categories = await axios
      .get("https://jav.souzou.dev/jav4free/categories/")
      .catch(e => {
        console.log(e);
      });
    let idols = await axios
      .get("https://jav.souzou.dev/jav4free/idols/")
      .catch(e => {
        console.log(e);
      });
    let idol = await axios
      .get("https://jav.souzou.dev/jav4free/idols/" + id)
      .catch(e => {
        console.log(e);
      });
    return {
      idol: idol.data.idol,
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols
    };
  },
  methods: {
    async updateIdol() {
      let obj = {
        name: this.idol.name,
        imageUrl: this.idol.imageUrl,
        hidden: false
      };
      let response = await axios
        .patch("https://jav.souzou.dev/jav4free/idols/" + this.idol._id, obj, {
          headers: {
            "x-access-token": this.$store.state.token
          }
        })
        .catch(e => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
    }
  }
};
</script>

<style lang="scss">
</style>