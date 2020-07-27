<template>
  <div>
    <div v-if="$device.isDesktop">
      <Crumbs />
      <div class="container-fluid">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6 class="title-white text-left">Recently Added Videos</h6>
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
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                <button v-if="page!=lastPage" disabled type="button" class="btn paginate-index">...</button>
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
      <div class="container-fluid">
        <div class="need-space"></div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h6 class="title-white text-left">Recently Added Videos</h6>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row">
          <div v-for="jav in javs" :key="jav._id" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <CardJavMobile v-bind:dataJav="jav" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="pagination">
              <button
                v-if="page!=1"
                @click="prevClick()"
                type="button"
                class="btn paginate-prev"
              >Prev</button>
              <button
                v-for="(prevPage, index) in previousPagesMobile"
                :key="index"
                type="button"
                class="btn paginate-index"
                @click="pullPage(Number(prevPage))"
              >{{prevPage}}</button>
              <button disabled type="button" class="btn paginate-actual">{{page}}</button>
              <button
                v-for="(nextPage, index) in actualNextPagesMobile"
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
  name: "RecentJavs",
  layout: ctx => (ctx.isMobile ? "mobile" : "default"),
  components: {
    Crumbs,
    CardJav,
    CardJavMobile
  },
  data() {
    return {
      prevPages: null,
      nextPages: null
    };
  },
  head() {
    return {
      title: "Recently Videos | Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Uploads every day, free streaming videos, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData({ params }) {
    let page = params.page;
    if (page == null || page == "") {
      page = "1";
    }
    let javs = await axios
      .get("https://jav.souzou.dev/jav4free/javs/getJavsByPage/" + page)
      .catch(e => {
        console.log(e);
      });
    return {
      javs: javs.data.javs,
      page: page,
      nextPage: javs.data.nextPage,
      lastPage: javs.data.lastPage
    };
  },
  beforeCreate() {
    let routePage = "javs/" + this.$route.params.page;
    this.$store.dispatch("addCrumb", {
      page: "Javs",
      show: "Recently Added Videos",
      route: routePage
    });
  },
  methods: {
    nextClick() {
      var newPage = Number(this.page) + 1;
      this.$router.push({ path: "/javs/" + newPage });
    },
    prevClick() {
      var newPage = Number(this.page) - 1;
      this.$router.push({ path: "/javs/" + newPage });
    },
    pullPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({ path: "/javs/" + newPage });
    },
    pushPage(indexPage) {
      var newPage = Number(indexPage);
      this.$router.push({ path: "/javs/" + newPage });
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
    actualNextPagesMobile() {
      this.nextPages = [];
      for (
        let index = Number(this.page) + 1;
        index < Number(this.lastPage);
        index++
      ) {
        this.nextPages.push(index);
      }
      if (this.nextPages.length > 2) {
        return this.nextPages.slice(0, 2);
      } else {
        return this.nextPages;
      }
    }
  }
};
</script>

<style lang="scss">
</style>