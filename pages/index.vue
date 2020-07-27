<template>
  <div>
    <div v-if="$device.isDesktop" class="container-fluid">
      <PopUp />
      <div class="need-space"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <h6 class="title-index">
              <nuxt-link
                :to="'/categories/1/'+category1._id"
                tag="a"
                class="title-white"
              >Recommended Category - {{category1.name}} JAV's</nuxt-link>
            </h6>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <nuxt-link :to="'/categories/1/'+category1._id" class="btn btn-more float-right">
              watch more
              <font-awesome-icon :icon="['fas', 'plus']" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row">
          <div
            v-for="jav in javsCategory1"
            :key="jav._id"
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
          >
            <CardJav v-bind:dataJav="jav" />
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <h6 class="title-index">
              <nuxt-link :to="'/javs/1'" tag="a" class="title-white">Recently Added Videos</nuxt-link>
            </h6>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <nuxt-link :to="'/javs/1'" class="btn btn-more float-right">
              watch more
              <font-awesome-icon :icon="['fas', 'plus']" />
            </nuxt-link>
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
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <h6 class="title-index">
              <nuxt-link :to="'/idols/1'" tag="a" class="title-white">Featured Jav Idols</nuxt-link>
            </h6>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <nuxt-link :to="'/idols/1'" class="btn btn-more float-right">
              watch more
              <font-awesome-icon :icon="['fas', 'plus']" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-for="(idol,index) in idols"
            :key="index"
            class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
          >
            <CardIdol
              v-if="idol != null"
              v-bind:dataId="idol._id"
              v-bind:dataName="idol.name"
              v-bind:dataUrl="idol.imageUrl"
            ></CardIdol>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="container-fluid">
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <nuxt-link :to="'/categories/1/'+category1._id" class="btn btn-more">
              Recommended Videos from "{{category1.name}}"
              <font-awesome-icon :icon="['fas', 'plus']" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row">
        <div
          v-for="jav in javsCategory1"
          :key="jav._id"
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <CardJavMobile v-bind:dataJav="jav" />
        </div>
      </div>
      <div class="need-space"></div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <nuxt-link :to="'/javs/1'" class="btn btn-more">
              Recently Added Videos
              <font-awesome-icon :icon="['fas', 'plus']" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="row">
        <div v-for="jav in javs" :key="jav._id" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <CardJavMobile v-bind:dataJav="jav" />
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import PopUp from "~/components/PopUpAd/popUpAd.vue";
import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "../components/Cards/CardJav00";
import CardJavMobile from "../components/Cards/CardJav00Mobile";
import CardIdol from "../components/Cards/CardIdol00";
import CardIdolMobile from "../components/Cards/CardIdol00Mobile";

export default {
  layout: ctx => (ctx.isMobile ? "mobile" : "default"),
  components: {
    PopUp,
    Crumbs,
    CardJav,
    CardIdol,
    CardJavMobile,
    CardIdolMobile
  },
  head() {
    return {
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch every japanese adult video in HD and Free, Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData() {
    const cat1 = await axios
      .get("https://jav.souzou.dev/jav4free/categories/getRandomCategory")
      .catch(e => {
        console.log(e);
      });
    const javs = await axios
      .get("https://jav.souzou.dev/jav4free/javs/getLatestJavs")
      .catch(e => {
        console.log(e);
      });
    const javsMobile = await axios
      .get("https://jav.souzou.dev/jav4free/javs/", {
        headers: {
          quantity: 8
        }
      })
      .catch(e => {
        console.log(e);
      });
    const idols = await axios
      .get("https://jav.souzou.dev/jav4free/idols/getRandomIdols")
      .catch(e => {
        console.log(e);
      });
    return {
      category1: cat1.data.category,
      javsCategory1: cat1.data.javs,
      javs: javs.data.javs,
      javsMobile: javsMobile.data.javs,
      idols: idols.data.idols
    };
  },
  beforeCreate() {
    this.$store.dispatch("addCrumb", { page: "Home", route: "" });
  }
};
</script>

<style>
</style>