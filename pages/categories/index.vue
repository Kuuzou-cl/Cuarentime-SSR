<template>
  <div>
    <div v-if="$device.isDesktop">
      <Crumbs />
      <div class="container-fluid">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6 class="title-white text-left">Categories</h6>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="row justify-content-center">
                <div v-for="category in categories" :key="category._id">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <nuxt-link :to="'/categories/1/'+category._id">
                      <button class="btn category-title">{{ category.name }}</button>
                    </nuxt-link>
                  </div>
                </div>
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
            <h6 class="title-white text-left">Categories</h6>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="row justify-content-center">
              <div v-for="category in categories" :key="category._id">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <nuxt-link :to="'/categories/1/'+category._id">
                    <button class="btn category-title">{{ category.name }}</button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="need-space"></div>
      <div class="need-space"></div>
      <div class="need-space"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";

export default {
  layout: ctx => (ctx.isMobile ? "mobile" : "default"),
  components: {
    Crumbs
  },
  head() {
    return {
      title: "Categories on Jav4Free | Japanese Adult Videos for Free",
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, Here you can watch free adult porn videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData() {
    const { data } = await axios
      .get("https://jav.souzou.dev/jav4free/categories")
      .catch(e => {
        console.log(e);
      });
    return { categories: data.categories };
  },
  beforeCreate() {
    this.$store.dispatch("addCrumb", {
      page: "Categories",
      show: "Categories",
      route: "categories"
    });
  }
};
</script>