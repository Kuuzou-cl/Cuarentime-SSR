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
              <h2>Add new Category</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
              <div class="container container-admin">
                <div class="row justify-content-center">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-row">
                      <label for="inputCat01">Category Title</label>
                      <input
                        v-model="catName"
                        class="input-admin"
                        id="inputCat01"
                        placeholder="Enter new category title"
                      />
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <button class="btn category-admin" @click="postCat()">Add Category</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div class="tableFixHead">
                <table class="table table-hover text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="t-header">Pending Javs ({{this.categories.length}})</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(category, key) in this.categories" :key="key">
                      <th>{{category.name}}</th>
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
  name: "NewCategory",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      catName: ""
    };
  },
  async asyncData() {
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
    return {
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols
    };
  },
  methods: {
    async postCat() {
      var obj = {
        name: this.catName
      };
      let response = await axios
        .post("https://jav.souzou.dev/jav4free/categories/newCategory/", obj, {
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