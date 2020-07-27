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
              <h2>List of Published Idols</h2>
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
                      <th scope="col" class="t-header">Name</th>
                      <th scope="col" class="t-header">Url</th>
                      <th scope="col" class="t-header">Javs Quantity</th>
                      <th scope="col" class="t-header"></th>
                      <th scope="col" class="t-header"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="idol in filterIdols" :key="idol._id">
                      <th v-if="idol.javsQ == '0'" class="red">{{idol.name}}</th>
                      <th v-else>{{idol.name}}</th>
                      <td>{{idol.imageUrl}}</td>
                      <th v-if="idol.javsQ == '0'" class="red">{{idol.javsQ}}</th>
                      <th v-else>{{idol.javsQ}}</th>
                      <td>
                        <nuxt-link
                          :to="'/dashboard/editIdols/'+idol._id"
                          class="btn button-admin"
                        >Edit</nuxt-link>
                      </td>
                      <td>
                        <button @click="deleteIdol(idol._id)" class="btn button-admin">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
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
  name: "editIdols",
  components: {
    SidebarAdmin
  },
  data() {
    return { search: "", idols: null, filteredIdols: [] };
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
    async deleteIdol(_id) {
      let message = await axios
        .delete("https://jav.souzou.dev/jav4free/idols/" + _id,
          {
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
    filterIdols() {
      this.filteredIdols = [];
      this.idols.forEach(idol => {
        if (idol.name.toLowerCase().includes(this.search.toLowerCase())) {
          this.filteredIdols.push(idol);
        }
      });
      return this.filteredIdols;
    }
  }
};
</script>

<style lang="scss">
.red {
  color: #e8175d;
}
</style>