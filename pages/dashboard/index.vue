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
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
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
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <div class="tableFixHead">
                <table class="table table-hover text-center">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="t-header"
                      >Pending Javs ({{this.spaceCheck(result, javs).length}})</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(jav, key) in this.spaceCheck(result, javs)" :key="key">
                      <th>{{jav}}</th>
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
  name: "Dashboard",
  components: {
    SidebarAdmin
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

    let spaceDataJavs = await axios
      .get("https://sfo2.digitaloceanspaces.com/javdata?prefix=javs/")
      .catch(e => {
        console.log(e);
      });
    var result = JSON.parse(convert.xml2json(spaceDataJavs.data, options));
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
      result: result,
      resultIdols: resultIdols
    };
  },
  methods: {
    spaceCheck(space, javs) {
      let spaceData = [];
      space.elements[0].elements.forEach(element => {
        if (element.name === "Contents") {
          element.elements.forEach(obj => {
            if (obj.name === "Key") {
              let javNameData = obj.elements[0].text.split("/");
              if (javNameData[1]) {
                let javName = javNameData[1].split(".");
                spaceData.push(javName[0]);
              }
            }
          });
        }
      });

      let pending = [];

      spaceData.forEach(r => {
        if (!javs.some(item => item.code === r)) {
          pending.push(r);
        }
      });

      return pending;
    },
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
    }
  }
};
</script>

<style lang="scss">
</style>