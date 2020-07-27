<template>
  <div>
    <div v-if="$device.isDesktop">
      <Crumbs />
      <div class="container-fluid">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6 class="title-white text-left">Category - {{category.name}} | Latest Videos</h6>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div v-for="jav in javs" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <CardJav v-bind:dataJav="jav" />
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 ol-md-12 col-sm-12 col-xs-12">
              <div class="pagination">
                <button
                  v-if="page!=1"
                  @click="prevClick()"
                  type="button"
                  class="btn paginate-prev"
                >Prev</button>
                <button
                  v-for="(prevPage, index) in previousPages"
                  :key="index"
                  type="button"
                  class="btn paginate-index"
                  @click="pullPage(Number(prevPage))"
                >{{prevPage}}</button>
                <button disabled type="button" class="btn paginate-actual">{{page}}</button>
                <button
                  v-for="(nextPage, index) in actualNextPages"
                  :key="index"
                  type="button"
                  class="btn paginate-index"
                  @click="pushPage(Number(nextPage))"
                >{{nextPage}}</button>
                <button
                  v-if="page< lastPage - 1"
                  disabled
                  type="button"
                  class="btn paginate-index"
                >...</button>
                <button
                  v-if="page!=lastPage"
                  type="button"
                  @click="pushPage(Number(lastPage))"
                  class="btn paginate-index"
                >{{Number(lastPage)}}</button>
                <button
                  v-if="nextPage"
                  type="button"
                  class="btn paginate-next"
                  @click="nextClick()"
                >Next</button>
                <button v-else disabled type="button" class="btn paginate-next">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile">
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h6 class="title-white text-left">Category - {{category.name}} | Latest Videos</h6>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row">
          <div v-for="jav in javs" :key="jav._id" class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <CardJavMobile v-bind:dataJav="jav" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 ol-md-12 col-sm-12 col-xs-12">
            <div class="pagination">
              <button
                v-if="page!=1"
                @click="prevClick()"
                type="button"
                class="btn paginate-prev"
              >Prev</button>
              <button
                v-for="(prevPage, index) in previousPages"
                :key="index"
                type="button"
                class="btn paginate-index"
                @click="pullPage(Number(prevPage))"
              >{{prevPage}}</button>
              <button disabled type="button" class="btn paginate-actual">{{page}}</button>
              <button
                v-for="(nextPage, index) in actualNextPages"
                :key="index"
                type="button"
                class="btn paginate-index"
                @click="pushPage(Number(nextPage))"
              >{{nextPage}}</button>
              <button
                v-if="nextPage"
                type="button"
                class="btn paginate-next"
                @click="nextClick()"
              >Next</button>
              <button v-else disabled type="button" class="btn paginate-next">Next</button>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="need-space"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "~/components/Cards/CardJav00";
import CardJavMobile from "~/components/Cards/CardJav00Mobile";

export default {
  name: "category",
  layout: ctx => (ctx.isMobile ? "mobile" : "default"),
  components: { Crumbs, CardJav, CardJavMobile },
  data() {
    return {
      prevPages: null,
      nextPages: null
    };
  },
  head() {
    return {
      title: this.titleC + " Videos | Jav4Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can watch" +
            this.titleC +
            " porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData({ params }) {
    let page = params.page;
    if (page == null || page == "") {
      page = "1";
    }
    let categoryId = params.id;
    let category = await axios
      .get("https://jav.souzou.dev/jav4free/categories/" + categoryId)
      .catch(e => {
        console.log(e);
      });
    let javs = await axios
      .get(
        "https://jav.souzou.dev/jav4free/javs/getJavByCategory/" +
          page +
          "/" +
          categoryId
      )
      .catch(e => {
        console.log(e);
      });
    return {
      titleC: category.data.category.name,
      category: category.data.category,
      javs: javs.data.javs,
      page: page,
      nextPage: javs.data.nextPage,
      lastPage: javs.data.lastPage
    };
  },
  beforeCreate() {
    let routePage =
      "categories/" + this.$route.params.page + "/" + this.$route.params.id;
    this.$store.dispatch("addCrumb", {
      page: "Category",
      show: this.$route.params.id,
      route: routePage
    });
  },
  methods: {
    nextClick() {
      var newPage = Number(this.page) + 1;
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    },
    pullPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    },
    pushPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({
        path: "/categories/" + newPage + "/" + this.category._id
      });
    }
  },
  computed: {
    previousPages() {
      this.prevPages = [];
      for (let index = 1; index < Number(this.page); index++) {
        this.prevPages.push(index);
      }
      if (this.prevPages.length > 4) {
        return this.prevPages.slice(
          this.prevPages.length - 4,
          this.prevPages.length
        );
      } else {
        return this.prevPages;
      }
    },
    previousPagesMobile() {
      this.prevPages = [];
      for (let index = 1; index < Number(this.page); index++) {
        this.prevPages.push(index);
      }
      if (this.prevPages.length > 2) {
        return this.prevPages.slice(
          this.prevPages.length - 2,
          this.prevPages.length
        );
      } else {
        return this.prevPages;
      }
    },
    actualNextPages() {
      this.nextPages = [];
      for (
        let index = Number(this.page) + 1;
        index < Number(this.lastPage);
        index++
      ) {
        this.nextPages.push(index);
      }
      if (this.nextPages.length > 4) {
        return this.nextPages.slice(0, 4);
      } else {
        return this.nextPages;
      }
    },
    actualNextPages() {
      this.nextPages = [];
      for (
        let index = Number(this.page) + 1;
        index < Number(this.lastPage);
        index++
      ) {
        this.nextPages.push(index);
      }
      if (this.nextPages.length > 4) {
        return this.nextPages.slice(0, 4);
      } else {
        return this.nextPages;
      }
    }
  }
};
</script>

<style scoped>
</style>