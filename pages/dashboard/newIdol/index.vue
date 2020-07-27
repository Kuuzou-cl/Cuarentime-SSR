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
              <h2>Add new Idol</h2>
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
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <div class="form-row">
                      <img
                        id="inputJav06"
                        :src="'https://javdata.sfo2.digitaloceanspaces.com/idols/'+this.idolUrl+'.jpg'"
                      />
                    </div>
                  </div>
                  <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                    <div class="form-row">
                      <label for="inputCat01">Idol Name</label>
                      <input
                        v-model="idolName"
                        class="input-admin"
                        id="inputCat01"
                        placeholder="Enter idol's name"
                      />
                    </div>
                    <div class="form-row">
                      <label for="inputJav02">Idol Name index</label>
                      <input
                        v-model="idolUrl"
                        class="input-admin"
                        id="inputJav02"
                        placeholder="Enter file name, example: 'name-surname'"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="need-space"></div>
              <div class="container">
                <div class="row justify-content-center">
                  <button class="btn category-admin" @click="postIdol()">Add Idol</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div class="tableFixHead">
                <table class="table table-hover text-center">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="t-header"
                      >Pending Idols ({{this.spaceCheckIdols(resultIdols, idols).length}})</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(idol, key) in this.spaceCheckIdols(resultIdols, idols)" :key="key">
                      <th>{{idol}}</th>
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
  name: "NewIdol",
  components: {
    SidebarAdmin
  },
  data() {
    return {
      idolName: "",
      idolUrl: "",
      hidden: false
    };
  },
  async asyncData() {
    var convert = require("xml-js");
    var options = { compact: false, ignoreComment: true, spaces: 3 };

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
    let spaceDataIdols = await axios
      .get("https://sfo2.digitaloceanspaces.com/javdata?prefix=idols/")
      .catch(e => {
        console.log(e);
      });
    var resultIdols = JSON.parse(
      convert.xml2json(spaceDataIdols.data, options)
    );
    return {
      javs: javs.data.javs,
      categories: categories.data.categories,
      idols: idols.data.idols,
      resultIdols: resultIdols
    };
  },
  methods: {
    spaceCheckIdols(space, idols) {
      let spaceData = [];
      space.elements[0].elements.forEach(element => {
        if (element.name === "Contents") {
          element.elements.forEach(obj => {
            if (obj.name === "Key") {
              let javNameData = obj.elements[0].text.split("/");
              if (javNameData[1]) {
                let javName = javNameData[1].split(".");
                let name = javName[0].replace("-", " ");
                spaceData.push(name);
              }
            }
          });
        }
      });

      let pending = [];

      spaceData.forEach(r => {
        if (!idols.some(item => item.name.toLowerCase() === r)) {
          pending.push(r);
        }
      });

      return pending;
    },
    async postIdol() {
      var obj = {
        name: this.idolName,
        imageUrl:
          "https://javdata.sfo2.cdn.digitaloceanspaces.com/idols/" +
          this.idolUrl +
          ".jpg",
        hidden: this.hidden
      };
      let response = await axios
        .post("https://jav.souzou.dev/jav4free/idols/newIdol/", obj, {
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
.tableFixHead {
  overflow-y: auto;
  height: 680px;
}
.tableFixHead thead th {
  position: sticky;
  top: 0;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.t-header {
  background-color: #e8175d;
}
</style>