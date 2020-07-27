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
              <h2>List of Published Categories</h2>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                class="input-admin"
                type="text"
                v-model="search"
                placeholder="Search by name..."
              />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="tableFixHead">
                <table class="table table-hover text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="t-header">Title</th>
                      <th scope="col" class="t-header">Code</th>
                      <th scope="col" class="t-header"></th>
                      <th scope="col" class="t-header"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="category in filterCategories" :key="category._id">
                      <th scope="row">{{category.name}}</th>
                      <td>{{category._id}}</td>
                      <td>
                        <nuxt-link
                          :to="'/dashboard/editCategories/'+category._id"
                          class="btn button-admin"
                        >Edit</nuxt-link>
                      </td>
                      <td>
                        <button @click="deleteCat(category._id)" class="btn button-admin">Delete</button>
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
  name: "editCategories",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      search: "",
      categories: null,
      filteredCategories: [],
      categoriesLength: []
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
    async deleteCat(_id) {
      let message = await axios
        .delete("https://jav.souzou.dev/jav4free/categories/" + _id, {
          headers: {
            "x-access-token": this.$store.state.token
          }
        })
        .catch(e => {
          console.log(e);
        });
      this.$router.push({ path: "/dashboard" });
    }
  },
  computed: {
    filterCategories() {
      this.filteredCategories = [];
      this.categories.forEach(category => {
        if (category.name.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredCategories.push(category);
        }
      });
      return this.filteredCategories;
    }
  }
};
</script>

<style lang="scss">
</style>