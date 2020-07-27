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
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="row">
                      <label for="inputJav04">Category Name</label>
                      <input
                        v-model="category.name"
                        class="input-admin"
                        id="inputJav04"
                        placeholder="Enter new category name"
                      />
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <button class="btn category-admin" @click="updateJav()">Update Category</button>
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
  name: "editCategory",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      category: null
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
    let category = await axios
      .get("https://jav.souzou.dev/jav4free/categories/" + id)
      .catch(e => {
        console.log(e);
      });
    return {
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols,
      category: category.data.category
    };
  },
  methods: {
    async updateJav() {
      let obj = {
        name: this.category.name
      };
      let response = await axios
        .patch(
          "https://jav.souzou.dev/jav4free/categories/" + this.category._id,
          obj,
          {
            headers: {
              "x-access-token": this.$store.state.token
            }
          }
        )
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